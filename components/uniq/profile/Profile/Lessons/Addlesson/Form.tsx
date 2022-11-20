import { setRefresh } from "@components/uniq/profile/profileSlice";
import { RequestCreateLesson, RequestLessonFilterOptions } from "api/schema";
import { requestCreateLesson } from "api/services";
import { useRouter } from "next/router";
import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  options: RequestLessonFilterOptions;
}

const Form: FC<Props> = ({ options }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ message: string; isError: boolean }>(
    { message: "", isError: false }
  );
  const sendRequest = async (data: RequestCreateLesson) => {
    setMessage({ message: "", isError: false });
    setLoading(true);
    const { status } = await requestCreateLesson(data);
    if (status === 201) {
      setMessage({ message: "درس با موفقیت اضافه شد", isError: false });
      dispatch(setRefresh());
    } else if (status === 401) router.push("/login");
    else if (status >= 400)
      setMessage({ message: "در اضافه کردن درس خطایی رخ داد", isError: true });

    setLoading(false);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const lesson_time = form.get("lesson_time") as string;
    const lesson_day = form.get("lesson_day") as string;
    const building = form.get("building") as string;
    const status = form.get("status") as string;
    const data: RequestCreateLesson = {
      name,
      lesson_time,
      lesson_day: Number(lesson_day),
      building,
      status,
    };
    sendRequest(data);
  };
  const onValidte = (e: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    e.target.setCustomValidity("");
    // @ts-ignore
    if (!e.target.validity.valid) {
      // @ts-ignore
      e.target.setCustomValidity("این فیلد اجباری است");
    }
  };
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    e.target.setCustomValidity("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div dir="rtl" className="flex flex-col items-start ">
          <label htmlFor="add_lesson_name">نام درس</label>
          <input
            required
            id="add_lesson_name"
            name="name"
            className="input input-bordered input-sm rounded mt-1"
            placeholder="نام درس"
            type="text"
            onInvalid={onValidte}
            onInput={onInput}
          />
          <label htmlFor="add_lesson_lesson_time">زمان شروع</label>
          <input
            required
            id="add_lesson_lesson_time"
            name="lesson_time"
            className="input input-bordered input-sm rounded mt-1"
            type="time"
            onInvalid={onValidte}
            onInput={onInput}
          />
          <label htmlFor="add_lesson_lesson_day">روز</label>

          <select
            id="add_lesson_lesson_day"
            name="lesson_day"
            className="input input-bordered input-sm rounded mt-1"
          >
            <option value="0">شنبه</option>
            <option value="1">یک‌شنبه</option>
            <option value="2">دوشنبه</option>
            <option value="3">سه‌شنبه</option>
            <option value="4">چهارشنبه</option>
            <option value="5">پنجشنبه</option>
            <option value="6">جمعه</option>
          </select>
          <label htmlFor="add_lesson_building">ساختمان</label>
          <select
            id="add_lesson_building"
            name="building"
            className="input input-bordered input-sm rounded mt-1"
          >
            {options.building.map((bl) => (
              <option key={bl.id} value={bl.id}>
                {bl.name}
              </option>
            ))}
          </select>
          <label htmlFor="add_lesson_status">وضعیت</label>
          <select
            id="add_lesson_status"
            name="status"
            className="input input-bordered input-sm rounded mt-1"
          >
            {options.status.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className={`btn btn-sm rounded mt-4 w-full ${loading && "loading"}`}
        >
          افزودن
        </button>

        {message.message && (
          <div
            className={`alert whitespace-normal flex-row h-12 text-end mt-2 ${
              message.isError ? "alert-error" : "alert-success"
            }`}
          >
            <div>
              {message.isError ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              <span>{message.message}</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default Form;

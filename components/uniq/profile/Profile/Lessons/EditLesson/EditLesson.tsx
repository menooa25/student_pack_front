import { setRefresh } from "@components/uniq/profile/profileSlice";
import { RequestLessonFilterOptions, RequestPatchLessons } from "api/schema";
import { requestLessonFilterOptions, requestUpdateLesson } from "api/services";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Context } from "../context";
import Form from "./Form";

const EditLesson: FC = () => {
  const editlessonContext = useContext(Context);
  const [loading, setLodading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    isError: false,
  });
  const [modalIsOpen, setModaIsOpen] = useState<boolean>(false);
  const [editOptions, setEditOptions] = useState<
    RequestLessonFilterOptions | undefined
  >();
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonFilterOptions();
      setEditOptions(data);
    };
    sendRequest();
  }, []);
  useEffect(() => {
    if (!modalIsOpen) {
      setAlertMessage({ isError: false, message: "" });
    }
  }, [modalIsOpen]);
  const onSubmit = async (editLesson: RequestPatchLessons) => {
    setLodading(true);
    const { status } = await requestUpdateLesson(
      editlessonContext.lesson.id,
      editLesson
    );
    setLodading(false);
    if (status >= 400)
      setAlertMessage({ isError: true, message: "در ویرایش خطایی رخ داد" });
    else if (status === 401) router.push("/login");
    else {
      setAlertMessage({ isError: false, message: "ویرایش با موفقیت انجام شد" });
      dispatch(setRefresh());
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        id={editlessonContext.modalId}
        className="modal-toggle"
        checked={modalIsOpen}
        onChange={() => setModaIsOpen(!modalIsOpen)}
      />

      <div className="modal">
        <div className="modal-box relative max-w-sm ">
          <label
            htmlFor={editlessonContext.modalId}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" font-bold text-center">
            {editlessonContext.lesson.name}
          </h3>
          <div dir="rtl">
            {modalIsOpen && (
              <Form
                editOptions={editOptions}
                lesson={editlessonContext.lesson}
                onSubmit={onSubmit}
                loading={loading}
              />
            )}
            {alertMessage.message && (
              <div
                dir="ltr"
                className={`alert flex-row whitespace-normal h-12 text-end mt-2 ${
                  alertMessage.isError ? "alert-error" : "alert-success"
                }`}
              >
                {alertMessage.isError ? (
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
                <span>{alertMessage.message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLesson;

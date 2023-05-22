import React, { useContext, useEffect, useState } from "react";
import { Context } from "@components/uniq/profile/Profile/Lessons/context";
import { requestDeleteLesson } from "../../../../../../api/services";
import { setRefresh } from "@components/uniq/profile/profileSlice";
import { useDispatch } from "react-redux";

const DeleteLesson = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState({
    message: "",
    isError: false,
  });
  const { lessonIdForDelete, deleteModalId, lessonNameForDelete } =
    useContext(Context);
  const [loading, setLoading] = useState<boolean>(false);
  const onDelete = async () => {
    if (lessonIdForDelete) {
      setLoading(true);
      const { status } = await requestDeleteLesson(lessonIdForDelete);

      setLoading(false);
      if (status === 204) {
        setAlertMessage({
          message: `با موفقیت حذف شد ${lessonNameForDelete} درس `,
          isError: false,
        });
      } else
        setAlertMessage({
          message: `در حذف درس، خطایی رخ داد`,
          isError: true,
        });
      dispatch(setRefresh());
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        id={deleteModalId}
        className="modal-toggle"
        checked={modalIsOpen}
        onChange={() => {
          setModalIsOpen(!modalIsOpen);
          setAlertMessage({ isError: false, message: "" });
        }}
      />

      <div className="modal">
        <div className="modal-box relative max-w-md ">
          <label
            htmlFor={deleteModalId}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mt-5 xs:mt-0 text-center">
            آیا از حذف کردن{" "}
            <span className={"font-bold"}>{lessonNameForDelete}</span> اطمینان
            دارید؟
          </h3>
          <div className={"flex font-bold  justify-center mt-3"}>
            <button
              onClick={() => setModalIsOpen(false)}
              className={"btn  btn-sm rounded-md mr-1 w-20 btn-error"}
            >
              خیر
            </button>
            <button
              onClick={onDelete}
              className={`btn btn-sm rounded-md ml-1 w-20 btn-success ${
                loading && "loading"
              }`}
            >
              بله
            </button>
          </div>
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
  );
};

export default DeleteLesson;

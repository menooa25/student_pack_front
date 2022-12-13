import React, { useContext, useEffect, useState } from "react";
import { Context } from "@components/uniq/profile/Profile/Lessons/context";
import { requestDeleteLesson } from "../../../../../../api/services";

const DeleteLesson = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { lessonIdForDelete, deleteModalId, lessonNameForDelete } =
    useContext(Context);
  const [loading, setLoading] = useState<boolean>(false);
  const onDelete = async () => {
    if (lessonIdForDelete) {
      const resp = await requestDeleteLesson(lessonIdForDelete);
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
              className={"btn btn-sm rounded-md ml-1 w-20 btn-success"}
            >
              بله
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteLesson;

import { RequestLessonFilterOptions, RequestPatchLessons } from "api/schema";
import { requestLessonFilterOptions, requestUpdateLesson } from "api/services";
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../context";
import Form from "./Form";

const EditLesson: FC = () => {
  const editlessonContext = useContext(Context);
  const [loading, setLodading] = useState<boolean>(false);
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
  const onSubmit = async (editLesson: RequestPatchLessons) => {
    setLodading(true);
    const { data, status } = await requestUpdateLesson(
      editlessonContext.lesson.id,
      editLesson
    );
    console.log(data, status);
    setLodading(false);
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLesson;

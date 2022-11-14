import { RequestLessonFilterOptions } from "api/schema";
import { requestLessonFilterOptions } from "api/services";
import React, { useEffect, useState } from "react";
import Form from "./Form";

const AddLesson = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<RequestLessonFilterOptions>({
    building: [],
    status: [],
    teacher: [],
  });
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonFilterOptions();
      setOptions(data);
    };
    if (modalOpen) sendRequest();
  }, [modalOpen]);

  return (
    <div>
      <label
        htmlFor="add_new_lesson"
        className="btn-sm bg-base-300 rounded-t-none btn w-full m-0 rounded-lg"
      >
        +
      </label>

      <input
        type="checkbox"
        checked={modalOpen}
        onChange={() => setModalOpen(!modalOpen)}
        id="add_new_lesson"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-64 relative">
          <label
            htmlFor="add_new_lesson"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold">افزودن درس</h3>
          {modalOpen && <Form options={options} />}
        </div>
      </div>
    </div>
  );
};

export default AddLesson;

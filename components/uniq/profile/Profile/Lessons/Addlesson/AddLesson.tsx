import React from "react";
import Form from "./Form";

const AddLesson = () => {
  return (
    <div>
      <label
        htmlFor="add_new_lesson"
        className="btn-sm bg-base-300 rounded-t-none btn w-full m-0 rounded-lg"
      >
        +
      </label>

      <input type="checkbox" id="add_new_lesson" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-64 relative">
          <label
            htmlFor="add_new_lesson"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold">افزودن درس</h3>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;

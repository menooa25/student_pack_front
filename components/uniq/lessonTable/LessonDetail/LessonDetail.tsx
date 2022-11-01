import React, { FC, ReactNode } from "react";

interface Props {
  modalId: string;
  lessonId: number;
}

const LessonDetail: FC<Props> = ({ lessonId, modalId }) => {
  if (lessonId === -1) return <></>;
  return (
    <div>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative  ">
          <label
            htmlFor={modalId}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" font-bold">this is modal for lesson {lessonId}</h3>
          <p className="py-4">message</p>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;

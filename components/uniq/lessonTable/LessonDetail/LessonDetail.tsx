import { RequestLesson } from "api/schema";
import { requestLessonDetail } from "api/services";
import React, { FC, useEffect, useState } from "react";

interface Props {
  modalId: string;
  lessonId: number;
}

const LessonDetail: FC<Props> = ({ lessonId, modalId }) => {
  const [lesson, setLesson] = useState<RequestLesson>();
  useEffect(() => {
    const sendRequest = async () => {
      const data = await requestLessonDetail(lessonId);
      setLesson(data);
    };
    if (lessonId !== -1) {
      sendRequest();
    }
  }, [lessonId]);

  const getUpdateTime = () => {
    const updated_at = lesson?.updated_at;
    if (updated_at) {
      return new Date(updated_at).toLocaleString("fa-ir");
    }
    return "";
  };
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
          <h3 className=" font-bold text-center">{lesson?.name}</h3>
          <div className="flex flex-col" dir="rtl">
            <span className="block">نام درس: {lesson?.name}</span>
            <span className="block">روز: {lesson?.lesson_day}</span>
            <span className="block">ساختمان: {lesson?.building}</span>
            <span className="block">زمان کلاس: {lesson?.lesson_time}</span>
            <span className="block">استاد: {lesson?.teacher}</span>
            <span className="block">وضعیت: {lesson?.status}</span>
            <span className="block">آخرین بروزرسانی: {getUpdateTime()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;

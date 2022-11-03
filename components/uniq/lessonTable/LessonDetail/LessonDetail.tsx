import { LoadingPlaceHolder } from "@components/UI";
import { RequestLesson } from "api/schema";
import { requestLessonDetail } from "api/services";
import React, { FC, useEffect, useState } from "react";

interface Props {
  modalId: string;
  lessonId: number;
}

const LessonDetail: FC<Props> = ({ lessonId, modalId }) => {
  const [lesson, setLesson] = useState<RequestLesson | null>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const sendRequest = async () => {
      const data = await requestLessonDetail(lessonId);
      setLesson(data);
    };
    if (lessonId !== -1) {
      sendRequest();
    }
  }, [lessonId]);
  useEffect(() => {
    if (!modalIsOpen) {
      setLesson(null);
    }
  }, [modalIsOpen]);
  const getUpdateTime = () => {
    const updated_at = lesson?.updated_at;
    if (updated_at) {
      return new Date(updated_at).toLocaleString("fa-ir");
    }
    return <LoadingPlaceHolder width={100} height={10} />;
  };
  if (lessonId === -1) return <></>;

  return (
    <div>
      <input
        type="checkbox"
        checked={modalIsOpen}
        onChange={({ target: { checked } }) => setModalIsOpen(checked)}
        id={modalId}
        className="modal-toggle"
      />
      <div className="modal ">
        <div className="modal-box relative  ">
          <label
            htmlFor={modalId}
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className=" font-bold text-center">
            {lesson?.name ?? <LoadingPlaceHolder width={100} height={10} />}
          </h3>
          <div className="flex flex-col" dir="rtl">
            <span className="block">
              نام درس:{" "}
              {lesson?.name ?? <LoadingPlaceHolder width={100} height={10} />}
            </span>
            <span className="block">
              روز:{" "}
              {lesson?.lesson_day ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">
              ساختمان:{" "}
              {lesson?.building ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">
              زمان کلاس:{" "}
              {lesson?.lesson_time ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">
              استاد:{" "}
              {lesson?.teacher ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">
              وضعیت:{" "}
              {lesson?.status ?? <LoadingPlaceHolder width={100} height={10} />}
            </span>
            <span className="block">آخرین بروزرسانی: {getUpdateTime()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;

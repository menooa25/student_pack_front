import { LoadingPlaceHolder } from "@components/UI";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import React, { FC } from "react";
import { convetDayCode } from "@utils/lesson";

interface Props {
  modalId: string;
}

const LessonDetail: FC<Props> = ({ modalId }) => {
  const lesson = useSelector((state: RootState) => state.lesson.lesson);
  const getUpdateTime = () => {
    const updated_at = lesson?.updated_at;
    if (updated_at) {
      return new Date(updated_at).toLocaleString("fa-ir");
    }
    return <LoadingPlaceHolder width={100} height={10} />;
  };

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
          <h3 className=" font-bold text-center">
            {lesson?.name ?? <LoadingPlaceHolder width={100} height={10} />}
          </h3>
          <div className="flex flex-col items-start" dir="rtl">
            <span className="block">
              نام درس:{" "}
              {lesson?.name ?? <LoadingPlaceHolder width={100} height={10} />}
            </span>
            <span className="block">
              روز:{" "}
              {(lesson && convetDayCode(lesson?.lesson_day)) ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">
              ساختمان:{" "}
              {lesson?.building_name ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">
              زمان کلاس:{" "}
              {lesson?.lesson_time.slice(0, 5) ?? (
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
              {lesson?.status_name ?? (
                <LoadingPlaceHolder width={100} height={10} />
              )}
            </span>
            <span className="block">آخرین بروزرسانی: {getUpdateTime()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;

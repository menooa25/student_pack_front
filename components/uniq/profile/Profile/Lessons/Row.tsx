import { setLesson } from "@components/uniq/lessonTable";
import LessonDetail from "@components/uniq/lessonTable/LessonDetail";
import { convetDayCode } from "@utils/lesson";
import { RequestLessonListSingle } from "api/schema";
import { requestLessonDetail } from "api/services";
import React, { FC, useContext } from "react";
import { useDispatch } from "react-redux";
import { Context } from "./context";

interface Props {
  lesson: RequestLessonListSingle;
}

const Row: FC<Props> = ({ lesson }) => {
  const editLessonContext = useContext(Context);

  return (
    <>
      <tr>
        <td className="sticky left-0">
          <label
            className="cursor-pointer"
            htmlFor={editLessonContext.modalId}
            onClick={() => editLessonContext.onSetLesson(lesson)}
          >
            {lesson.name}
          </label>
        </td>
        <td>{lesson.building_name}</td>
        <td>{convetDayCode(lesson.lesson_day)}</td>
        <td>{lesson.lesson_time}</td>
        <td>{lesson.status_name}</td>
      </tr>
    </>
  );
};

export default Row;

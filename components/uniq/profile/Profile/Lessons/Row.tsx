import { convetDayCode } from "@utils/lesson";
import { RequestLessonListSingle } from "api/schema";
import React, { FC, useContext } from "react";
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
        <td>{lesson.class_number}</td>
        <td>{convetDayCode(lesson.lesson_day)}</td>
        <td>{lesson.lesson_time.substring(0, 5)}</td>
        <td>{lesson.status_name}</td>
      </tr>
    </>
  );
};

export default Row;

import { convetDayCode } from "@utils/lesson";
import { RequestLessonListSingle } from "api/schema";
import React, { FC, useContext } from "react";
import { Context } from "./context";
import { TiDelete } from "react-icons/ti";
interface Props {
  lesson: RequestLessonListSingle;
}

const Row: FC<Props> = ({ lesson }) => {
  const editDeleteLessonContext = useContext(Context);

  return (
    <>
      <tr>
        <td className="sticky left-0">
          <label
            className="cursor-pointer"
            htmlFor={editDeleteLessonContext.modalId}
            onClick={() => editDeleteLessonContext.onSetLesson(lesson)}
          >
            {lesson.name}
          </label>
        </td>
        <td>{lesson.building_name}</td>
        <td>{lesson.class_number}</td>
        <td>{convetDayCode(lesson.lesson_day)}</td>
        <td>{lesson.lesson_time.substring(0, 5)}</td>
        <td>{lesson.status_name}</td>
        <td>
          <label
            className="cursor-pointer"
            htmlFor={editDeleteLessonContext.deleteModalId}
            onClick={() =>
              editDeleteLessonContext.onDelete(
                lesson.id.toString(),
                lesson.name
              )
            }
          >
            <TiDelete
              className={"mx-auto text-2xl text-error cursor-pointer"}
            />
          </label>
        </td>
      </tr>
    </>
  );
};

export default Row;

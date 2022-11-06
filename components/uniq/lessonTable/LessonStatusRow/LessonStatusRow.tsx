import { RequestLessonListSingle } from "api/schema";
import React, { FC } from "react";

interface Props {
  lesson: RequestLessonListSingle;
  onClick: (id: number) => void;
}

const LessonStatusRow: FC<Props> = ({ lesson, onClick }) => {
  return (
    <tr>
      <td className="sticky left-0 text-start  ">
        <label
          className="cursor-pointer"
          htmlFor={`lesson_detail_${lesson.id}`}
          onClick={() => onClick(lesson.id)}
        >
          {lesson.name}
        </label>
      </td>
      <td>{lesson.lesson_day}</td>
      <td>{lesson.building}</td>
      <td>{lesson.lesson_time}</td>
      <td>{lesson.teacher}</td>
      <td>{lesson.status}</td>
    </tr>
  );
};

export default LessonStatusRow;

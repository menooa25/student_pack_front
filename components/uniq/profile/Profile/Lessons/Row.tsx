import { RequestLessonListSingle } from "api/schema";
import React from "react";

const Row = ({ lesson }: { lesson: RequestLessonListSingle }) => {
  console.log(lesson);
  return (
    <tr>
      <td>{lesson.name}</td>
      <td>{lesson.building}</td>
      <td>{lesson.lesson_day}</td>
      <td>{lesson.lesson_time}</td>
      <td>{lesson.status}</td>
    </tr>
  );
};

export default Row;

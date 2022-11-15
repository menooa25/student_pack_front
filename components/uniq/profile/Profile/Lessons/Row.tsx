import { setLesson } from "@components/uniq/lessonTable";
import LessonDetail from "@components/uniq/lessonTable/LessonDetail";
import { RequestLessonListSingle } from "api/schema";
import { requestLessonDetail } from "api/services";
import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Row = ({ lesson }: { lesson: RequestLessonListSingle }) => {
  const dispatch = useDispatch();
  const idForModal = uuidv4();
  const onClickForDetail = async (id: number) => {
    dispatch(setLesson(null));
    const { data } = await requestLessonDetail(id);
    dispatch(setLesson(data));
  };

  return (
    <>
      <tr>
        <td className="sticky left-0">
          <label
            className="cursor-pointer"
            htmlFor={idForModal}
            onClick={() => onClickForDetail(lesson.id)}
          >
            {lesson.name}
          </label>
        </td>
        <td>{lesson.building_name}</td>
        <td>{lesson.lesson_day}</td>
        <td>{lesson.lesson_time}</td>
        <td>{lesson.status_name}</td>
      </tr>
      <LessonDetail modalId={idForModal} />
    </>
  );
};

export default Row;

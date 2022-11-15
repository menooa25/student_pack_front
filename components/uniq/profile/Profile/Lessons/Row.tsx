import { setLesson } from "@components/uniq/lessonTable";
import LessonDetail from "@components/uniq/lessonTable/LessonDetail";
import { convetDayCode } from "@utils/lesson";
import { RequestLessonListSingle } from "api/schema";
import { requestLessonDetail } from "api/services";
import React from "react";
import { useDispatch } from "react-redux";

const Row = ({
  lesson,
  idForModal,
}: {
  lesson: RequestLessonListSingle;
  idForModal: string;
}) => {
  const dispatch = useDispatch();
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
        <td>{convetDayCode(lesson.lesson_day)}</td>
        <td>{lesson.lesson_time}</td>
        <td>{lesson.status_name}</td>
      </tr>
    </>
  );
};

export default Row;

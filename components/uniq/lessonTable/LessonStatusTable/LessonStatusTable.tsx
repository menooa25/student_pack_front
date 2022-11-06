import React, { FC, useEffect, useState } from "react";
import LessonDetail from "../LessonDetail";
import LessonStatusRow from "../LessonStatusRow";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@redux/store";
import { requestLessonDetail, requestLessonLis } from "api/services";
import { setLesson, setLessons } from "./LessonStatusTableSlice";

const LessonStatusTable: FC = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state: RootState) => state.lesson.lessons);
  const [selectedLessonId, setSelectedLessonId] = useState<number>(-1);
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonLis();
      dispatch(setLessons(data));
    };
    sendRequest();
  }, []);
  useEffect(() => {
    const sendRequest = async () => {
      dispatch(setLesson(null));
      const { data } = await requestLessonDetail(selectedLessonId);
      dispatch(setLesson(data));
    };
    if (selectedLessonId !== -1) {
      sendRequest();
    }
  }, [selectedLessonId]);
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="table text-xs text-center table-zebra table-compact w-full ">
        <thead>
          <tr className="overflow-hidden">
            <th>نام درس</th>
            <th>روز</th>
            <th>ساختمان</th>
            <th>ساعت شروع</th>
            <th>استاد</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {lessons?.map((l) => (
            <LessonStatusRow
              key={l.id}
              onClick={setSelectedLessonId}
              lesson={l}
            />
          ))}
        </tbody>
      </table>
      <LessonDetail modalId={`lesson_detail_${selectedLessonId}`} />
    </div>
  );
};

export default LessonStatusTable;

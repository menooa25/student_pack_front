import React, { FC, useEffect, useState } from "react";
import LessonDetail from "../LessonDetail";
import LessonStatusRow from "../LessonStatusRow";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@redux/store";
import { requestLessonDetail, requestLessonList } from "api/services";
import { setLesson, setLessons, sortByTime } from "./LessonStatusTableSlice";
import Filters from "../Filters/Filters";

const LessonStatusTable: FC = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state: RootState) => state.lesson.lessons);
  const [selectedLessonId, setSelectedLessonId] = useState<number>(-1);
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonList();
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
    <div>
      <Filters />
      <div className="overflow-x-auto rounded-lg mt-1">
        <table className="table text-xs text-center table-zebra table-compact w-full ">
          <thead>
            <tr className="cursor-pointer ">
              <th onClick={() => dispatch(sortByTime("name"))}>نام درس</th>
              <th onClick={() => dispatch(sortByTime("lesson_day"))}>روز</th>
              <th onClick={() => dispatch(sortByTime("building_name"))}>ساختمان</th>
              <th>کلاس</th>

              <th onClick={() => dispatch(sortByTime("lesson_time"))}>
                ساعت شروع
              </th>
              <th onClick={() => dispatch(sortByTime("teacher"))}>استاد</th>
              <th onClick={() => dispatch(sortByTime("status_name"))}>وضعیت</th>
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
    </div>
  );
};

export default LessonStatusTable;

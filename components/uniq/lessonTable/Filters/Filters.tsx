import { LessonDayFilter } from "api/schema";
import { requestLessonFilter } from "api/services";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLessons } from "../LessonStatusTable";
import DayFilter from "./DayFilter";
import TeacherFilter from "./TeacherFilter";

const Filters = () => {
  const dispatch = useDispatch();
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<LessonDayFilter>("");
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonFilter({
        lesson_day: selectedDay,
        teacher__id: selectedTeacher,
      });
      dispatch(setLessons(data));
    };
    if (!isInitial) sendRequest();
    else setIsInitial(false);
  }, [selectedDay, selectedTeacher]);
  return (
    <div className="flex justify-end ">
      <TeacherFilter
        setSelectedTeacher={setSelectedTeacher}
        selectedTeacher={selectedTeacher}
        className="bg-base-100 py-1 flex items-center  mr-1 rounded"
      />
      <DayFilter
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        className="bg-base-100 py-1 flex items-center  rounded"
      />
    </div>
  );
};

export default Filters;

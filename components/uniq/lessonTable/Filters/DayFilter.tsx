import { LessonDayFilter } from "api/schema";
import { requestLessonFilter } from "api/services";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLessons } from "../LessonStatusTable";

interface Props {
  className?: string;
}

const DayFilter: FC<Props> = ({ className = "" }) => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [selectedDay, setSelectedDay] = useState<LessonDayFilter>("");
  const dispatch = useDispatch();
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonFilter({ lesson_day: selectedDay });
      dispatch(setLessons(data));
    };
    if (!isInitial) sendRequest();
    else setIsInitial(false);
  }, [selectedDay]);
  return (
    <div className={className}>
      <select
        value={selectedDay}
        onChange={({ target: { value } }) =>
          setSelectedDay(value as LessonDayFilter)
        }
        className="focus:outline-none select select-bordered select-xs w-full max-w-xs text-end"
      >
        <option value={""}>هر روز</option>
        <option value={"0"}>شنبه</option>
        <option value={"1"}>یکشنبه</option>
        <option value={"2"}>دوشنبه</option>
        <option value={"3"}>سه‌شنبه</option>
        <option value={"4"}>چهارشنبه</option>
        <option value={"5"}>پنجشنبه</option>
        <option value={"6"}>جمعه</option>
      </select>
    </div>
  );
};

export default DayFilter;

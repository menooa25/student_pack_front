import { LessonDayFilter } from "api/schema";
import React, { FC } from "react";

interface Props {
  className?: string;
  selectedDay: LessonDayFilter;
  setSelectedDay: (selectedDay: LessonDayFilter) => void;
}

const DayFilter: FC<Props> = ({
  className = "",
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <div className={className}>
      <select
        value={selectedDay}
        onChange={({ target: { value } }) =>
          setSelectedDay(value as LessonDayFilter)
        }
        className="focus:outline-none select select-bordered select-xs w-full max-w-xs text-end border-none"
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

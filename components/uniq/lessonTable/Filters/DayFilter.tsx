import React, { FC } from "react";

interface Props {
  className?: string;
}

const DayFilter: FC<Props> = ({ className = "" }) => {
  return (
    <div className={className}>
      <select className="focus:outline-none select select-bordered select-xs w-full max-w-xs text-end">
        <option value={-1} selected>
          هر روز
        </option>
        <option value={0}>شنبه</option>
        <option value={1}>یکشنبه</option>
        <option value={2}>دوشنبه</option>
        <option value={3}>سه‌شنبه</option>
        <option value={4}>چهارشنبه</option>
        <option value={5}>پنجشنبه</option>
        <option value={6}>جمعه</option>
      </select>
    </div>
  );
};

export default DayFilter;

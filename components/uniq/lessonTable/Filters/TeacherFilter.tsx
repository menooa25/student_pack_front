import React, { FC } from "react";

interface Props {
  className?: string;
}

const TeacherFilter: FC<Props> = ({ className = "" }) => {
  return (
    <div className={className}>
      <select className="focus:outline-none select select-bordered select-xs w-full max-w-xs text-end">
        <option value={-1} selected>
          تمامی اساتید
        </option>
      </select>
    </div>
  );
};

export default TeacherFilter;

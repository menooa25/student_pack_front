import React from "react";
import DayFilter from "./DayFilter";
import TeacherFilter from "./TeacherFilter";

const Filters = () => {
  return (
    <div className="flex justify-end">
      <TeacherFilter className="bg-base-100 p-1 mr-1 rounded" />
      <DayFilter className="bg-base-100 p-1 rounded" />
    </div>
  );
};

export default Filters;

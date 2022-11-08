import { requestLessonFilterOptions } from "api/services";
import React, { FC, useEffect, useState } from "react";

interface Props {
  className?: string;
  selectedTeacher: string;
  setSelectedTeacher: (selectedTeacher: string) => void;
}

const TeacherFilter: FC<Props> = ({
  className = "",
  selectedTeacher,
  setSelectedTeacher,
}) => {
  const [teachers, setTeachers] = useState<
    Array<{ name: string; id: number | string }>
  >([]);
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonFilterOptions();
      setTeachers([{ id: "", name: "تمامی اساتید" }, ...data.teacher]);
    };
    sendRequest();
  }, []);

  return (
    <div className={className}>
      <select
        value={selectedTeacher}
        onChange={({ target: { value } }) => setSelectedTeacher(value)}
        className="focus:outline-none select select-bordered select-xs w-full max-w-xs text-end border-none"
      >
        {teachers.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeacherFilter;

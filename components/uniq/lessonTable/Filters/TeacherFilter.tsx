import { requestLessonFilter, requestLessonFilterOptions } from "api/services";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLessons } from "../LessonStatusTable";

interface Props {
  className?: string;
}

const TeacherFilter: FC<Props> = ({ className = "" }) => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const dispatch = useDispatch();
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
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonFilter({
        teacher__id: selectedTeacher,
      });
      dispatch(setLessons(data));
    };
    if (!isInitial) sendRequest();
    else setIsInitial(false);
  }, [selectedTeacher]);
  return (
    <div className={className}>
      <select
        value={selectedTeacher}
        onChange={({ target: { value } }) => setSelectedTeacher(value)}
        className="focus:outline-none select select-bordered select-xs w-full max-w-xs text-end"
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

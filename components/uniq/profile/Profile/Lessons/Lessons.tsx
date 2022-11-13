import { RequestLessonList } from "api/schema";
import { requestUserLessons } from "api/services";
import React, { useEffect, useState } from "react";
import useStatusCheck from "../../useStatusCheck";
import AddLesson from "./Addlesson/AddLesson";
import Row from "./Row";

const Lessons = () => {
  const checkStatus = useStatusCheck();
  const [lessons, setLessons] = useState<RequestLessonList>();
  useEffect(() => {
    const sendRequest = async () => {
      const { data, status } = await requestUserLessons();
      checkStatus(status);
      setLessons(data);
    };
    sendRequest();
  }, []);
  return (
    <table className="table table-zebra mx-auto table-compact text-center">
      <thead>
        <tr>
          <th>نام درس</th>
          <th>ساختمان</th>
          <th>روز</th>
          <th>ساعت شروع</th>
          <th>وضعیت</th>
        </tr>
      </thead>
      <tbody>
        {lessons?.map((ls) => (
          <Row key={ls.id} lesson={ls} />
        ))}
        <tr>
          <td className="p-0" colSpan={5}>
            <AddLesson />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Lessons;

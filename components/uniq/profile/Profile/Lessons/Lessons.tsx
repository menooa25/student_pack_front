import LessonDetail from "@components/uniq/lessonTable/LessonDetail";
import { RequestLessonList } from "api/schema";
import { requestUserLessons } from "api/services";
import React, { useEffect, useState } from "react";
import useStatusCheck from "../../useStatusCheck";
import AddLesson from "./Addlesson/AddLesson";
import Row from "./Row";
import EditLessonContext from "./context";
import EditLesson from "./EditLesson";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import DeleteLesson from "@components/uniq/profile/Profile/Lessons/DeleteLesson";

const Lessons = () => {
  const checkStatus = useStatusCheck();
  const refresh = useSelector((state: RootState) => state.profile.refresh);
  const [lessons, setLessons] = useState<RequestLessonList>();

  useEffect(() => {
    const sendRequest = async () => {
      const { data, status } = await requestUserLessons();
      if (checkStatus(status)) setLessons(data);
    };
    sendRequest();
  }, [refresh]);
  return (
    <EditLessonContext>
      <div className="overflow-auto rounded-lg">
        <table className="table table-zebra mx-auto table-compact text-center">
          <thead>
            <tr>
              <th>نام درس</th>
              <th>ساختمان</th>
              <th>کلاس</th>

              <th>روز</th>
              <th>ساعت شروع</th>
              <th>وضعیت</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {lessons?.map((ls) => (
              <Row key={ls.id} lesson={ls} />
            ))}
            <tr>
              <td className={"p-0"}>
                <AddLesson />
              </td>
            </tr>
          </tbody>
        </table>
        <DeleteLesson />
        <EditLesson />
      </div>
    </EditLessonContext>
  );
};

export default Lessons;

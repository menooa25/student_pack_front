import { RequestLessonList } from "api/schema";
import React, { FC, useState } from "react";
import LessonDetail from "../LessonDetail";
import LessonStatusRow from "../LessonStatusRow";

interface Props {
  lessons: [RequestLessonList];
}

const LessonStatusTable: FC<Props> = ({ lessons }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<number>(-1);
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="table text-xs text-center table-zebra table-compact w-full ">
        <thead>
          <tr className="overflow-hidden">
            <th>نام درس</th>
            <th>روز</th>
            <th>ساختمان</th>
            <th>ساعت شروع</th>
            <th>استاد</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((l) => (
            <LessonStatusRow onClick={setSelectedLessonId} lesson={l} />
          ))}
        </tbody>
      </table>
      <LessonDetail
        lessonId={selectedLessonId}
        modalId={`lesson_detail_${selectedLessonId}`}
      />
    </div>
  );
};

export default LessonStatusTable;

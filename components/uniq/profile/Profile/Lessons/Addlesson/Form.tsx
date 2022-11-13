import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div dir="rtl" className="flex flex-col items-start ">
          <label htmlFor="add_lesson_name">نام درس</label>
          <input
            id="add_lesson_name"
            name="name"
            className="input input-bordered input-sm rounded mt-1"
            placeholder="نام درس"
            type="text"
          />
          <label htmlFor="add_lesson_lesson_time">زمان شروع</label>
          <input
            id="add_lesson_lesson_time"
            name="lesson_time"
            className="input input-bordered input-sm rounded mt-1"
            placeholder="زمان شروع"
            type="text"
          />
          <label htmlFor="add_lesson_lesson_day">روز</label>
          <input
            id="add_lesson_lesson_day"
            name="lesson_day"
            className="input input-bordered input-sm rounded mt-1"
            placeholder="روز"
            type="text"
          />
          <label htmlFor="add_lesson_building">ساختمان</label>
          <input
            id="add_lesson_building"
            name="building"
            className="input input-bordered input-sm rounded mt-1"
            placeholder="ساختمان"
            type="text"
          />
          <label htmlFor="add_lesson_status">وضعیت</label>
          <input
            id="add_lesson_status"
            name="status"
            className="input input-bordered input-sm rounded mt-1"
            placeholder="وضعیت"
            type="text"
          />
        </div>
      </form>
    </>
  );
};

export default Form;

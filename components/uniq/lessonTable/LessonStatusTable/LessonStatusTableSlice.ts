import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RequestLesson, RequestLessonList } from "api/schema";

export type SortOptions =
  | "name"
  | "lesson_time"
  | "lesson_day"
  | "building_name"
  | "created_at"
  | "updated_at"
  | "teacher"
  | "status_name";

export interface LessonState {
  lessons: RequestLessonList | null;
  lesson: RequestLesson | null;
  sortedBy: Array<SortOptions>;
}

const initialState: LessonState = {
  lessons: null,
  lesson: null,
  sortedBy: [],
};

export const LessonStatusTableSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    setLessons: (state, action: PayloadAction<RequestLessonList>) => {
      state.lessons = action.payload;
    },
    setLesson: (state, action: PayloadAction<RequestLesson | null>) => {
      state.lesson = action.payload;
    },
    sortByTime: (state, action: PayloadAction<SortOptions>) => {
      const payload = action.payload;
      if (state.sortedBy.length && state.sortedBy.indexOf(payload) !== -1) {
        state.lessons?.sort((a, b) => (a[payload] < b[payload] ? 1 : -1));
        state.sortedBy = state.sortedBy.filter((by) => by !== payload);
      } else {
        state.lessons?.sort((a, b) => (a[payload] < b[payload] ? -1 : 1));
        state.sortedBy.push(payload);
      }
    },
  },
});

export const { setLessons, setLesson, sortByTime } =
  LessonStatusTableSlice.actions;

export default LessonStatusTableSlice.reducer;

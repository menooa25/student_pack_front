import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RequestLesson, RequestLessonList } from "api/schema";

export interface LessonState {
  lessons: RequestLessonList | null;
  lesson: RequestLesson | null;
}

const initialState: LessonState = {
  lessons: null,
  lesson: null,
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
  },
});

export const { setLessons, setLesson } = LessonStatusTableSlice.actions;

export default LessonStatusTableSlice.reducer;

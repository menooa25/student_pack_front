export interface RequestLessonListSingle {
  name: string;
  lesson_time: string;
  lesson_day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  building_name: string;
  created_at: string;
  updated_at: string;
  teacher: string;
  status_name: string;
  class_number: number | null;
  id: number;
}

export type RequestLessonList = [RequestLessonListSingle];

export interface RequestLesson {
  name: string;
  lesson_time: string;
  lesson_day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  building_name: string;
  created_at: string;
  updated_at: string;
  teacher: string;
  class_number: number | null;

  status_name: string;
  id: number;
}

export type LessonDayFilter = "" | "0" | "1" | "2" | "3" | "4" | "5" | "6";

export interface RequestLessonFilter {
  lesson_day?: LessonDayFilter;
  teacher__id?: number | string;
}

export interface RequestLessonFilterOptions {
  building: Array<{ name: string; id: number }>;
  status: Array<{ name: string; id: number }>;
  teacher: Array<{ name: string; id: number }>;
}

export interface RequestLogin {
  access: string;
  refresh: string;
}

export interface RequestCreateLesson {
  name: string;
  lesson_time: string;
  lesson_day: number;
  building: string;
  class_number: number;
  status: string;
}

export interface UserDetail {
  name: string;
  username: string;
  role: string;
}

export type RequestUserDetail = [UserDetail];

export interface RequestPatchLessons {
  name?: string;
  lesson_time?: string;
  lesson_day?: number;
  building?: number;
  class_number?: number | null;

  status?: number;
}

export interface RequestChnagePassword {
  password_one: string;
  password_two: string;
}

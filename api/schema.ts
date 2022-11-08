export interface RequestLessonListSingle {
  name: string;
  lesson_time: string;
  lesson_day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  building: string;
  created_at: string;
  updated_at: string;
  teacher: string;
  status: string;
  id: number;
}

export type RequestLessonList = [RequestLessonListSingle];

export interface RequestLesson {
  name: string;
  lesson_time: string;
  lesson_day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  building: string;
  created_at: string;
  updated_at: string;
  teacher: string;
  status: string;
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

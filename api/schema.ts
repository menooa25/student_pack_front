export interface RequestLessonListSingle {
  name: string;
  lesson_time: string;
  lesson_day: number;
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
  lesson_day: number;
  building: string;
  created_at: string;
  updated_at: string;
  teacher: string;
  status: string;
  id: number;
}

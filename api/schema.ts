export interface RequestLessonListSingle {
  name: string;
  lesson_time: string;
  lesson_day: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
  lesson_day: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  building: string;
  created_at: string;
  updated_at: string;
  teacher: string;
  status: string;
  id: number;
}

import { RequestLesson } from "api/schema";
import React, { createContext, FC, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
interface ContextState {
  lesson: RequestLesson;
  modalId: string;
}
interface EditLessonInterface extends ContextState {
  onSetLesson: (lesson: RequestLesson) => void;
}
interface DeleteLessonInterface extends ContextState {
  deleteModalId: string;
  lessonNameForDelete: string;
  lessonIdForDelete: string;
  onDelete: (lessonId: string, lessonName: string) => void;
}
const initialValue: EditLessonInterface & DeleteLessonInterface = {
  lesson: {
    building_name: "",
    created_at: "",
    id: 0,
    lesson_time: "",
    lesson_day: 0,
    name: "",
    status_name: "",
    teacher: "",
    class_number: null,
    updated_at: "",
  },
  modalId: "",
  onSetLesson() {},
  onDelete() {},
  deleteModalId: "",
  lessonIdForDelete: "",
  lessonNameForDelete: "",
};

export const Context = createContext<
  EditLessonInterface & DeleteLessonInterface
>(initialValue);
interface Props {
  children: ReactNode | ReactNode[];
}
const EditLessonContext: FC<Props> = ({ children }) => {
  const [contextState, setContextState] = useState<
    EditLessonInterface & DeleteLessonInterface
  >(initialValue);
  const onSetLesson = (lesson: RequestLesson) => {
    setContextState({ ...contextState, modalId: uuidv4(), lesson });
  };
  const onDelete = (lessonId: string, lessonName: string) => {
    setContextState({
      ...contextState,
      deleteModalId: uuidv4(),
      lessonIdForDelete: lessonId,
      lessonNameForDelete: lessonName,
    });
  };
  return (
    <Context.Provider value={{ ...contextState, onSetLesson, onDelete }}>
      {children}
    </Context.Provider>
  );
};

export default EditLessonContext;

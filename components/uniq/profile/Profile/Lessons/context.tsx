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
const initialValue: EditLessonInterface = {
  lesson: {
    building_name: "",
    created_at: "",
    id: 0,
    lesson_time: "",
    lesson_day: 0,
    name: "",
    status_name: "",
    teacher: "",
    updated_at: "",
  },
  modalId: "",
  onSetLesson() {},
};

export const Context = createContext<EditLessonInterface>(initialValue);
interface Props {
  children: ReactNode | ReactNode[];
}
const EditLessonContext: FC<Props> = ({ children }) => {
  const [contextState, setContextState] = useState<ContextState>(initialValue);
  const onSetLesson = (lesson: RequestLesson) => {
    setContextState({ modalId: uuidv4(), lesson });
  };
  return (
    <Context.Provider value={{ ...contextState, onSetLesson }}>
      {children}
    </Context.Provider>
  );
};

export default EditLessonContext;

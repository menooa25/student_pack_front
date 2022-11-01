import axios from "axios";
import { BASE_URL } from "./baseUrl";
import { RequestLesson, RequestLessonList } from "./schema";

const sesson = axios.create({ baseURL: BASE_URL });

export const requestLessonLis = async () => {
  const data: [RequestLessonList] = (await sesson.get("api/lessons/v1/")).data;
  return data;
};
export const requestLessonDetail = async (id: number) => {
  const data: RequestLesson = (await sesson.get(`api/lessons/v1/${id}`)).data;
  return data;
};

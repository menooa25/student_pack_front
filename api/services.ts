import axios from "axios";
import { BASE_URL } from "./baseUrl";
import { RequestLessonList } from "./schema";

const sesson = axios.create({ baseURL: BASE_URL });

export const requestLessonLis = async () => {
  const data: RequestLessonList = (await sesson.get("api/lessons/v1/")).data;
  return data;
};

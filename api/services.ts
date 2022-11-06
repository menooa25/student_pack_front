import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./baseUrl";
import { RequestLesson, RequestLessonList } from "./schema";

const sesson = axios.create({ baseURL: BASE_URL });

export const requestLessonLis = async () => {
  const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
    "api/lessons/v1/"
  );
  return resp;
};
export const requestLessonDetail = async (id: number) => {

    const resp:AxiosResponse<RequestLesson,any> =  await sesson.get(`api/lessons/v1/${id}`)
    return resp
};

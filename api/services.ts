import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./baseUrl";
import {
  RequestLesson,
  RequestLessonFilter,
  RequestLessonFilterOptions,
  RequestLessonList,
} from "./schema";

const sesson = axios.create({ baseURL: BASE_URL });

export const requestLessonList = async () => {
  const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
    "api/lessons/v1/"
  );
  return resp;
};
export const requestLessonListSearch = async (search: string) => {
  const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
    "api/lessons/v1/",
    { params: { search } }
  );
  return resp;
};
export const requestLessonDetail = async (id: number) => {
  const resp: AxiosResponse<RequestLesson, any> = await sesson.get(
    `api/lessons/v1/${id}`
  );
  return resp;
};
export const requestLessonFilter = async ({
  lesson_day = "",
  teacher__id = "",
}: RequestLessonFilter) => {
  const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
    `api/lessons/v1/`,
    { params: { lesson_day, teacher__id } }
  );
  return resp;
};

export const requestLessonFilterOptions = async () => {
  const resp: AxiosResponse<RequestLessonFilterOptions, any> = await sesson.get(
    `api/lessons/v1/filter_options/`
  );
  return resp;
};

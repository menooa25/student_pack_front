import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "./baseUrl";
import {
  RequestLesson,
  RequestLessonFilter,
  RequestLessonFilterOptions,
  RequestLessonList,
  RequestLogin,
} from "./schema";

const sesson = axios.create({ baseURL: BASE_URL });

export const requestLessonList = async () => {
  try {
    const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
      "api/lessons/v1/"
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError;
    return e.response;
  }
};
export const requestLessonListSearch = async (search: string) => {
  try {
    const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
      "api/lessons/v1/",
      { params: { search } }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError;
    return e.response;
  }
};
export const requestLessonDetail = async (id: number) => {
  try {
    const resp: AxiosResponse<RequestLesson, any> = await sesson.get(
      `api/lessons/v1/${id}`
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError;
    return e.response;
  }
};
export const requestLessonFilter = async ({
  lesson_day = "",
  teacher__id = "",
}: RequestLessonFilter) => {
  try {
    const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
      `api/lessons/v1/`,
      { params: { lesson_day, teacher__id } }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError;
    return e.response;
  }
};

export const requestLessonFilterOptions = async () => {
  try {
    const resp: AxiosResponse<RequestLessonFilterOptions, any> =
      await sesson.get(`api/lessons/v1/filter_options/`);
    return resp;
  } catch (error) {
    const e = error as AxiosError;
    return e.response;
  }
};

export const requestLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const resp: AxiosResponse<RequestLogin, any> = await sesson.post(
      `api/auth/jwt/create/`,
      { username, password }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestLogin, any>;
    return e.response!;
  }
};

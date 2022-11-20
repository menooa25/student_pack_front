import axios, { AxiosError, AxiosResponse } from "axios";
import { getCookie } from "cookies-next";
import { BASE_URL } from "./baseUrl";
import {
  RequestCreateLesson,
  RequestLesson,
  RequestLessonFilter,
  RequestLessonFilterOptions,
  RequestLessonList,
  RequestLessonListSingle,
  RequestLogin,
  RequestPatchLessons,
  RequestUserDetail,
} from "./schema";

const sesson = axios.create({ baseURL: BASE_URL });
const getAuthHeader = () => {
  const access_token = getCookie("access") ?? "";
  return { Authorization: `JWT ${access_token}` };
};
export const requestLessonList = async () => {
  try {
    const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
      "api/lessons/v1/"
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestLessonList, any>;
    return e.response!;
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
    const e = error as AxiosError<RequestLessonList, any>;
    return e.response!;
  }
};
export const requestLessonDetail = async (id: number) => {
  try {
    const resp: AxiosResponse<RequestLesson, any> = await sesson.get(
      `api/lessons/v1/${id}`
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestLesson, any>;
    return e.response!;
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
    const e = error as AxiosError<RequestLessonList, any>;
    return e.response!;
  }
};

export const requestLessonFilterOptions = async () => {
  try {
    const resp: AxiosResponse<RequestLessonFilterOptions, any> =
      await sesson.get(`api/lessons/v1/filter_options/`);
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestLessonFilterOptions, any>;
    return e.response!;
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
export const requestUserLessons = async () => {
  try {
    const resp: AxiosResponse<RequestLessonList, any> = await sesson.get(
      `api/lessons/v1/`,
      { headers: getAuthHeader() }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestLessonList, any>;
    return e.response!;
  }
};
export const requestCreateLesson = async (data: RequestCreateLesson) => {
  try {
    const resp: AxiosResponse<RequestLessonListSingle, any> = await sesson.post(
      `api/lessons/v1/`,
      data,
      { headers: getAuthHeader() }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestLessonListSingle, any>;
    return e.response!;
  }
};
export const requestUserDetail = async () => {
  try {
    const resp: AxiosResponse<RequestUserDetail, any> = await sesson.get(
      `api/user/`,
      { headers: getAuthHeader() }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestUserDetail, any>;
    return e.response!;
  }
};
export const requestUpdateLesson = async (
  lesson_id: number,
  editedLesson: RequestPatchLessons
) => {
  try {
    const resp: AxiosResponse<RequestUserDetail, any> = await sesson.patch(
      `api/lessons/v1/${lesson_id}/`,
      editedLesson,
      { headers: getAuthHeader() }
    );
    return resp;
  } catch (error) {
    const e = error as AxiosError<RequestUserDetail, any>;
    return e.response!;
  }
};

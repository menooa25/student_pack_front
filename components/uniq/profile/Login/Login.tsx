import { requestLogin } from "api/services";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "../profileSlice";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const sendRequest = async (username: string, password: string) => {
    setLoading(true);
    const { status, data } = await requestLogin({ username, password });
    setLoading(false);
    if (status <= 200) {
      dispatch(
        setToken({ accessToken: data.access, refreshToken: data.refresh })
      );
      dispatch(setLogin(true));
      setErrorMessage("");

      router.push("/profile");
    } else if (status == 401) {
      setErrorMessage("رمز عبور یا نام کاربری اشتباه است");
    }
  };
  const validate = (username: string, password: string) => {
    if (username && password) return true;
    if (!username) {
      setErrorMessage("نام کاربری اجباری است");
      return false;
    }
    if (!password) {
      setErrorMessage("رمز عبور اجباری است");
      return false;
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username") as string;
    const password = form.get("password") as string;
    if (validate(username, password)) {
      sendRequest(username, password);
    }
  };
  return (
    <div className="flex justify-center   items-center">
      <form
        onSubmit={onSubmit}
        className="mt-3 bg-base-100 w-full   mx-3 xs:w-auto sm:mx-auto   p-3 rounded form-control "
      >
        <input
          dir="rtl"
          type="text"
          className="input input-sm input-bordered rounded"
          placeholder="نام کاربری"
          name="username"
        />
        <input
          dir="rtl"
          type="password"
          className="input  mt-2 input-sm input-bordered rounded"
          placeholder="رمز عبور"
          name="password"
          autoComplete=""
        />
        <button
          className={`btn btn-sm rounded mt-3 ${loading && "loading"}`}
          type="submit"
        >
          ورود
        </button>
        {errorMessage && (
          <div className="alert  p-1 mx-auto  mt-3 w-full max-w-fit alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;

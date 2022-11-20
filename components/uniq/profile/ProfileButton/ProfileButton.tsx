import { RootState } from "@redux/store";
import { RequestUserDetail } from "api/schema";
import { requestUserDetail } from "api/services";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setToken } from "../profileSlice";

const ProfileButton = () => {
  const router = useRouter();
  const isLogin = useSelector((state: RootState) => state.profile.isLogin);
  const dispatch = useDispatch();

  return (
    <>
      <div className="dropdown dropdown-hover dropdown-end">
        <Link href={isLogin ? "/profile" : "/login"}>
          <label tabIndex={0} className="btn btn-ghost btn-sm rounded">
            {isLogin ? "پروفایل" : "ورود"}
          </label>
        </Link>
        {isLogin && (
          <ul
            dir="rtl"
            tabIndex={0}
            className=" dropdown-content menu  shadow bg-base-300 rounded-box w-20 mr-3"
          >
            <li
              onClick={() => {
                dispatch(setToken({ accessToken: "", refreshToken: "" }));
                dispatch(setLogin(false));
                router.push("/");
              }}
            >
              <a className="p-1">خروج</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProfileButton;

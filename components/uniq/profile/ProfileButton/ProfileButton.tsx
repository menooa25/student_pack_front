import { RootState } from "@redux/store";
import { RequestUserDetail } from "api/schema";
import { requestUserDetail } from "api/services";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../profileSlice";

const ProfileButton = () => {
  const [userDetail, setUserDetail] = useState<RequestUserDetail>([
    {
      name: "",
      role: "",
      username: "",
    },
  ]);
  const isLogin = useSelector((state: RootState) => state.profile.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendRequest = async () => {
      const { data, status } = await requestUserDetail();
      if (status === 200) dispatch(setLogin(true));
      else if (status === 401) dispatch(setLogin(false));
      setUserDetail(data);
    };
    sendRequest();
  }, []);
  return (
    <>
      <Link
        href={isLogin ? "/profile" : "/login"}
        className="btn btn-ghost btn-sm "
      >
        {isLogin ? "پروفایل" : "ورود"}
      </Link>
    </>
  );
};

export default ProfileButton;

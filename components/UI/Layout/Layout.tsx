import { ProfileButton } from "@components/uniq/profile";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { FaUniversity } from "react-icons/fa";
import s from "./Layout.module.css";
interface Props {
  children: ReactNode | ReactNode[];
  search: ReactNode;
}
export type LayoutType = FC<Props>;

const Layout: LayoutType = ({ children, search }) => {
  return (
    <div className={s.root}>
      <div className="navbar bg-base-100 flex justify-center min-h-0 h-9">
        <div className="max-w-5xl w-full grid grid-cols-3">
          <Link href={"/"}>
            <FaUniversity />
          </Link>

          {search}
          <div className="flex justify-end">
            <ProfileButton />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-5xl w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

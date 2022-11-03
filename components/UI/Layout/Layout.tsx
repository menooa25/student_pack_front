import React, { FC, ReactNode } from "react";
import s from "./Layout.module.css";
interface Props {
  children: ReactNode | ReactNode[];
}
export type LayoutType = FC<Props>;

const Layout: LayoutType = ({ children }) => {
  return (
    <div className={s.root}>
      <div className="navbar bg-base-100 flex justify-center min-h-0 h-9">
        <div className="max-w-5xl w-full">
          <div className="flex-1">
            <a className="btn btn-ghost btn-sm  normal-case ">لوگو</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                dir="rtl"
                type="text"
                placeholder="جستجو"
                className="input input-bordered input-xs  center rounded-md"
              />
            </div>
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

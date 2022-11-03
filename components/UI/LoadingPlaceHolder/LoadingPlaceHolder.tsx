import React, { FC } from "react";
import s from "./LoadingPlaceHolder.module.css";
interface Props {
  width: number | string;
  height: number | string;
}

const LoadingPlaceHolder: FC<Props> = ({ width, height }) => {
  return <div className={s.root} style={{ height, width }}></div>;
};

export default LoadingPlaceHolder;

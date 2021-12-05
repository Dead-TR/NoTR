import React, { FC } from "react";
import clsx from "clsx";
import css from "./style.module.scss";

interface Props {
  disabled: boolean;
}

export const SideBar: FC<Props> = ({ disabled, children }) => {
  return (
    <div className={clsx(css.root, disabled && css.root__disabled)}>
      {children}
    </div>
  );
};

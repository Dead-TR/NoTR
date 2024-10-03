import React, { FC, MouseEvent, useCallback } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { PopUpWrapperProps } from "pop-ups";

import css from "./style.module.scss";

const rootDom = document.getElementById("pop-up");

export const PopUpWrapper: FC<PopUpWrapperProps> = ({
  children,
  background = "transparent",
  frameOnClick,
  classes,
}) => {
  const stopPropagation = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }, []);

  if (rootDom) {
    return createPortal(
      <div className={clsx(css.root, classes?.root)} onClick={stopPropagation}>
        <div
          onClick={frameOnClick}
          className={clsx(
            css.frame,
            classes?.frame,
            background === "transparent"
              ? css.frame__transparent
              : css.frame__dark
          )}
        />
        <div className={clsx(css.children, classes?.paper)}>{children}</div>
      </div>,
      rootDom
    );
  }
  return null;
};

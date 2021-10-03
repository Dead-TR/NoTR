import React, { FC, MouseEvent, useCallback } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import css from "./style.module.scss";

interface Props {
  background?: "transparent" | "dark";
  frameOnClick?: () => void;
}

export const PopUpWrapper: FC<Props> = ({
  children,
  background = "transparent",
  frameOnClick,
}) => {
  const rootDom = document.querySelector("#pop-up");
  const stopPropagation = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }, []);

  if (rootDom) {
    return createPortal(
      <div className={css.root} onClick={stopPropagation}>
        <div
          onClick={frameOnClick}
          className={clsx(
            css.frame,
            background === "transparent"
              ? css.frame__transparent
              : css.frame__dark
          )}
        />
        <div className={css.children}>{children}</div>
      </div>,
      rootDom
    );
  }
  return null;
};

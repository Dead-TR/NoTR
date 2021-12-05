import React, { FC } from "react";

import { PopUpFrameBackground, PopUpWrapper } from "pop-ups";

import css from "./style.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  background: PopUpFrameBackground;
}

export const Modal: FC<Props> = ({ children, background, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <PopUpWrapper
      {...{
        background,
        frameOnClick: onClose,
        classes: {
          root: css.root,
          paper: css.paper,
        },
      }}
    >
      {children}
    </PopUpWrapper>
  );
};

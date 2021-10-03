import clsx from "clsx";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { PopUpWrapper } from "pop-ups";
import { createGuard } from "utils";
import css from "./style.module.scss";

interface Props {
  anchor?: HTMLElement | Element | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PopUpMenu: FC<Props> = ({ children, anchor, isOpen, onClose }) => {
  const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);
  const [isClosed, setIsClosed] = useState(true);

  const menuPosition = useMemo(() => {
    const elementGuard = createGuard<HTMLElement>("offsetLeft");
    if (anchor && elementGuard(anchor) && rootElement) {
      let top = anchor.offsetTop + anchor.offsetHeight;
      let left = anchor.offsetLeft + anchor.offsetWidth / 2;

      left -= rootElement.offsetWidth / 2;

      if (top < 0) {
        top = 0;
      }

      if (left < 0) {
        left = 0;
      }

      if (left + rootElement.offsetWidth > window.innerWidth) {
        left = window.innerWidth - rootElement.offsetWidth;
      }

      if (top + rootElement.offsetHeight > window.innerHeight) {
        top = window.innerHeight - rootElement.offsetHeight;
      }

      return {
        top,
        left,
      };
    }

    return {
      top: 0,
      left: 0,
    };
  }, [anchor, rootElement, children]);

  const endAnimation = () => {
    if (!isOpen) {
      setIsClosed(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsClosed(false);
    }
  }, [isOpen]);

  if (isClosed || !anchor) {
    return null;
  }

  return (
    <PopUpWrapper background="transparent" frameOnClick={onClose}>
      <div
        onAnimationEnd={endAnimation}
        ref={(node) => setRootElement(node)}
        className={clsx(css.root, isOpen ? css.open : css.close)}
        style={{
          transform: `translate(${menuPosition.left}px, ${menuPosition.top}px)`,
        }}
      >
        {children}
      </div>
    </PopUpWrapper>
  );
};

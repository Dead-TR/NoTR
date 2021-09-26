import { CSSProperties, FC, useMemo } from "react";
import clsx from "clsx";

import "./style.scss";

interface Props {
  isOpen: boolean;
  setOpen: (value: boolean) => void;

  className?: string;
  color?: string;
}

export const BurgerMenu: FC<Props> = ({
  isOpen,
  setOpen,
  className,
  color,
}) => {
  const lineStyle = useMemo<CSSProperties>(
    () => ({
      background: color,
    }),
    [color]
  );

  const changeOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <button className={clsx("BurgerMenu_root", className)} onClick={changeOpen}>
      <div
        className={clsx(
          "BurgerMenu_line",
          isOpen && "BurgerMenu_line__first-line-opened"
        )}
        style={lineStyle}
      />
      <div
        className={clsx(
          "BurgerMenu_line",
          isOpen && "BurgerMenu_line__second-line-opened"
        )}
        style={lineStyle}
      />
      <div
        className={clsx(
          "BurgerMenu_line",
          isOpen && "BurgerMenu_line__third-line-opened"
        )}
        style={lineStyle}
      />
    </button>
  );
};

import clsx from "clsx";
import React, { FC, useState } from "react";
import css from "./style.module.scss";

interface Props {
  defaultColor?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export const Color: FC<Props> = ({
  defaultColor = "#ffffff",
  className,
  onChange,
}) => {
  const [color, setColor] = useState(defaultColor);

  return (
    <div className={clsx(css.root, className)} style={{ background: color }}>
      <input
        type="color"
        className={css.input}
        value={color}
        onChange={({ target }) => {
          const color = target.value;
          setColor(color);
          onChange && onChange(color);
        }}
      />
    </div>
  );
};

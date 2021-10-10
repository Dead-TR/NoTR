import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

import css from "./style.module.scss";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "text" | "number";
  label?: string;
}

export const Input: FC<Props> = ({
  label,
  className,
  type = "text",
  ...props
}) => {
  return (
    <label className={css.wrapper}>
      {label ? <p className={css.label}>{label}</p> : null}
      <input
        className={clsx(css.input, className)}
        {...{
          type,
          ...props,
        }}
      />
    </label>
  );
};

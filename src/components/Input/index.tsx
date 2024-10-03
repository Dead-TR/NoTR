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

  classes?: {
    label?: string;
    input?: string;
  };
}

export const Input: FC<Props> = ({
  label,
  className,
  type = "text",
  classes,
  ...props
}) => {
  return (
    <label className={css.wrapper}>
      {label ? (
        <p className={clsx(css.label, classes?.label)}>{label}</p>
      ) : null}
      <input
        className={clsx(css.input, className, classes?.input)}
        {...{
          type,
          ...props,
        }}
      />
    </label>
  );
};

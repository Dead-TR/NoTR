import React, { FC } from "react";
import css from "./style.module.scss";

export enum DefaultCardColors {
  blue = "#007bff",
  green = "#28a745",
  red = "#dc3545",
  yellow = "#ffc107",
  teal = "#17a2b8",
  dark = "#343a40",
  gray = "#6c757d",
}

interface Props {
  name: string;
  title: string;
  text: string;
  color?: DefaultCardColors | string;
}

export const Card: FC<Props> = ({
  name,
  title,
  text,
  color = DefaultCardColors.blue,
}) => {
  return (
    <div className={css.root} style={{ background: color }}>
      <div className={css.name}>{name}</div>
      <div className={css.body}>
        <h5 className={css.title}>{title}</h5>
        <p className={css.text}>{text}</p>
      </div>
    </div>
  );
};

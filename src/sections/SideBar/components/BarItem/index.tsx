import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { Img } from "components";
import css from "./style.module.scss";
import clsx from "clsx";

interface Props {
  name: string;
  path: string;
  img?: string;
}

export const BarItem: FC<Props> = ({ name, path, img }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={clsx(css.root, pathname === path && css.root__selected)}
    >
      <Img src={img} className={css.root_img} />
      <p className={css.root_name}>{name}</p>
    </Link>
  );
};

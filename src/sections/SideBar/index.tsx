import { FC } from "react";
import clsx from "clsx";

import { UserName } from "components";

import bookUrl from "assets/icons/book.svg";
import markUrl from "assets/icons/mark.svg";

import { BarItem } from "./components";
import css from "./style.module.scss";

const navigation = [
  {
    path: "/main",
    name: "Main",
    img: markUrl,
  },
  {
    path: "/notes",
    name: "Notes",
    img: bookUrl,
  },
];

interface Props {
  disabled: boolean;
}

export const SideBar: FC<Props> = ({ disabled }) => {
  return (
    <div className={clsx(css.root, disabled && css.root__disabled)}>
      <UserName classes={{ wrapper: css.user }} />

      {navigation.map(({ name, path, img }) => (
        <BarItem {...{ name, path, img }} />
      ))}
    </div>
  );
};

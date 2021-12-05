import { FC } from "react";

import { SideBar as SideBarWrapper, SideBarItem, UserName } from "components";

import bookUrl from "assets/icons/book.svg";
import markUrl from "assets/icons/mark.svg";

import css from "./style.module.scss";

const navigation = [
  // {
  //   path: "/main",
  //   name: "Main",
  //   img: markUrl,
  // },
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
    <SideBarWrapper disabled={disabled}>
      <UserName classes={{ wrapper: css.user }} />
      {navigation.map(({ name, path, img }) => (
        <SideBarItem {...{ name, path, img }} />
      ))}
    </SideBarWrapper>
  );
};

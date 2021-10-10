import { FC, useState } from "react";
import clsx from "clsx";

import { Header, SideBar } from "sections";
import { Page } from "..";
import css from "./style.module.scss";

export const Layout: FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className={css.root}>
      <Header
        {...{
          isSideBarOpen,
          setIsSideBarOpen,
        }}
      />
      <div className={clsx(css.page)}>
        <SideBar disabled={!isSideBarOpen} />
        <Page />
      </div>
    </div>
  );
};

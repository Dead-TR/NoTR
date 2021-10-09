import { FC, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import clsx from "clsx";

import { Header, SideBar } from "sections";
import { Page } from "..";
import css from "./style.module.scss";

export const Layout: FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <Router>
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
    </Router>
  );
};

import React, { FC } from "react";
import { Button } from "components";

import css from "./style.module.scss";
import clsx from "clsx";

interface Props {
  tabList: string[];
  activeTab: string;
  changeActiveTab: (value: string) => void;
}

export const Tabs: FC<Props> = ({ tabList, activeTab, changeActiveTab }) => {
  return (
    <div className={css.root}>
      {tabList.map((item) => (
        <Button
          className={clsx(css.tab)}
          active={item === activeTab}
          onClick={() => changeActiveTab(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

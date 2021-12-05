import React, { FC } from "react";
import clsx from "clsx";

import { Button } from "components";
import { useUser } from "providers";

import css from "./style.module.scss";

interface Props {
  tabList: string[];
  activeTab: string;
  changeActiveTab: (value: string) => void;
}

export const Tabs: FC<Props> = ({ tabList, activeTab, changeActiveTab }) => {
  const { user } = useUser();
  return (
    <div className={css.root}>
      {tabList.map((item, i) => {
        if (!user && i === 1) {
          return null;
        }

        return (
          <Button
            className={clsx(css.tab)}
            active={item === activeTab}
            onClick={() => changeActiveTab(item)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

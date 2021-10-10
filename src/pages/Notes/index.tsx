import React, { FC, useState } from "react";

import { Cards, Tabs } from "./components";

const tabList = ["Local", "Cloud"];

export const Notes: FC = () => {
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const changeActiveTab = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div>
      <Tabs {...{ tabList, activeTab, changeActiveTab }} />
      <Cards />
    </div>
  );
};

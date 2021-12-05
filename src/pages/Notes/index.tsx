import { useUser } from "providers";
import React, { FC, useState } from "react";

import { Cards, Tabs } from "./components";

export const tabList = ["Local", "Cloud"];

export const Notes: FC = () => {
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const { user } = useUser();
  const changeActiveTab = (value: string) => {
    const activeValue = user ? value : "Local";
    setActiveTab(activeValue);
  };

  return (
    <div>
      <Tabs {...{ tabList, activeTab, changeActiveTab }} />
      <Cards activeTab={activeTab === "Local" ? "local" : "cloud"} />
    </div>
  );
};

import { FC, useState } from "react";
import { Page } from "..";
import { Header, SideBar } from "../../sections";

export const Layout: FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div>
      <Header
        {...{
          isSideBarOpen,
          setIsSideBarOpen,
        }}
      />
      <div>
        <SideBar />
        <Page />
      </div>
    </div>
  );
};

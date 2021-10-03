import { FC, useState } from "react";
import { Header, SideBar } from "sections";
import { Page } from "..";

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

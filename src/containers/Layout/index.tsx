import { FC } from "react";
import { Page } from "..";
import { Header } from "../../components";

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Page />
    </div>
  );
};

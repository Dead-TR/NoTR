import React, { FC } from "react";
import { BurgerMenu } from "components";

import { UserMenu } from "./components";
import css from "./style.module.scss";

interface Props {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

export const Header: FC<Props> = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <header className={css.header}>
      <BurgerMenu
        {...{
          isOpen: isSideBarOpen,
          setOpen: setIsSideBarOpen,
        }}
      />

      <div>
        <UserMenu />
      </div>
    </header>
  );
};

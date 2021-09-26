import React, { FC } from "react";
import { BurgerMenu } from "../../components";

interface Props {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
}

export const Header: FC<Props> = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <header>
      <div>
        <BurgerMenu
          {...{
            isOpen: isSideBarOpen,
            setOpen: setIsSideBarOpen,
          }}
        />
      </div>
    </header>
  );
};

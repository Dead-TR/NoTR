import React, { FC, useCallback, useEffect } from "react";

import { PopUpMenu } from "pop-ups";
import { useUser } from "providers";
import { Img, UserName } from "components";

import logOutIconUrl from "assets/icons/log-out.svg";

import css from "./style.module.scss";
import NavElement from "./NavElement";

interface Props {
  anchor?: HTMLElement | Element | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserNavigation: FC<Props> = ({ anchor, isOpen, onClose }) => {
  const { logOut, user } = useUser();
  const handleLogOut = useCallback(() => {
    logOut();
    onClose();
  }, []);

  useEffect(() => {
    return () => {
      onClose();
    };
  }, []);

  return (
    <PopUpMenu
      {...{
        anchor,
        isOpen,
        onClose,
      }}
    >
      {user && (
        <div className={css.root}>
          <UserName />

          <div className={css.navigation}>
            <NavElement
              text={"Log Out"}
              onClick={handleLogOut}
              logo={logOutIconUrl}
            />
          </div>
        </div>
      )}
    </PopUpMenu>
  );
};

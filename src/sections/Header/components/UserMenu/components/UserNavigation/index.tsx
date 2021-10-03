import React, { FC, useCallback, useEffect } from "react";
import { Img } from "../../../../../../components";
import { PopUpMenu } from "../../../../../../pop-ups";
import { useUser } from "../../../../../../providers";
import NavElement from "./NavElement";
import css from "./style.module.scss";
import logOutIconUrl from "../../../../../../assets/icons/log-out.svg";

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
          <div className={css.user}>
            <Img
              src={user?.photoURL || ""}
              alt="user"
              className={css.user_avatar}
            />
            <p className={css.user_name}>{user?.displayName}</p>
          </div>

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

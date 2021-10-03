import { MouseEvent, useCallback, useRef, useState } from "react";
import { Button, Img } from "../../../../components";
import { useUser } from "../../../../providers";
import { UserNavigation } from "./components";
import css from "./style.module.scss";

export const UserMenu = () => {
  const { user, logIn } = useUser();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isUserNavOpen, setIsUserNavOpen] = useState(false);

  const closeUserNav = useCallback(() => {
    setIsUserNavOpen(false);
  }, []);
  const openUserNav = useCallback(() => {
    setIsUserNavOpen(true);
  }, []);

  return (
    <div className={css.UserMenu}>
      {user ? (
        <div
          ref={menuRef}
          className={css["UserMenu_content-wrapper"]}
          onClick={openUserNav}
        >
          <Img
            src={user.photoURL || ""}
            alt={user.displayName || ""}
            className={css["UserMenu_avatar"]}
          />
        </div>
      ) : (
        <Button className={css["UserMenu_login-button"]} onClick={logIn}>
          log in
        </Button>
      )}

      <UserNavigation
        anchor={menuRef.current}
        isOpen={isUserNavOpen}
        onClose={closeUserNav}
      />
    </div>
  );
};

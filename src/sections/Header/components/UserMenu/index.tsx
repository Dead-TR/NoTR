import { Button } from "../../../../components/Button";
import { useUser } from "../../../../providers";
import css from "./style.module.scss";

export const UserMenu = () => {
  const { user, logOut, logIn } = useUser();
  return (
    <div className={css.UserMenu}>
      {user ? (
        <div
          className={css["UserMenu_content-wrapper"]}
          onContextMenu={(e) => {
            e.preventDefault();
            logOut();
          }}
        >
          <img
            src={user.photoURL || ""}
            alt={user.displayName || ""}
            className={css["UserMenu_avatar"]}
          />
          {/* <p className={css["UserMenu_name"]}>{user.displayName}</p> */}
        </div>
      ) : (
        <Button className={css["UserMenu_login-button"]} onClick={logIn}>
          log in
        </Button>
      )}
    </div>
  );
};

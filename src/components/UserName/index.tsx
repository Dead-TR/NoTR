import React, { FC } from "react";
import { Img } from "components";
import { useUser } from "providers";
import css from "./style.module.scss";
import clsx from "clsx";

interface Props {
  withoutName?: boolean;
  classes?: {
    wrapper?: string;
    img?: string;
    text?: string;
  };
}

export const UserName: FC<Props> = ({ withoutName, classes }) => {
  const { user } = useUser();
  return (
    <div className={clsx(css.user, classes?.wrapper)}>
      <Img
        src={user?.photoURL || ""}
        alt="user"
        className={clsx(css.user_avatar, classes?.img)}
      />
      {!withoutName && (
        <p className={clsx(css.user_name, classes?.text)}>
          {user?.displayName}
        </p>
      )}
    </div>
  );
};

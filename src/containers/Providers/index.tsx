import React, { FC } from "react";
import { UserContextProvider } from "providers";

export const Providers: FC = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

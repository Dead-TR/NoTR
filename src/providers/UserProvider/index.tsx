import { FC, useContext, useEffect, useState } from "react";
import { User } from "@firebase/auth";

import {
  fireBaseAuth,
  getAuthResult,
  getLogOut,
} from "modules/firebase/controllers/auth";
import { AuthStatus } from "modules/firebase/types";

import { UserContext } from "./context";

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  console.log("🚀 ~ file: index.tsx ~ line 15 ~ user", user);
  const checkAuth = () => {
    getAuthResult((user) => setUser(user));
  };
  const logIn = () => {
    fireBaseAuth((user) => setUser(user));
  };
  const logOut = () => {
    const deleteUser = () => setUser(null);
    const getMessage = (type: AuthStatus) => {
      console.log("log out status:", type);
      if (type === "error") {
        checkAuth();
      }
    };

    getLogOut(deleteUser, getMessage);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        checkAuth,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

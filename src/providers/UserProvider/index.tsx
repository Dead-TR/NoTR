import { User } from "@firebase/auth";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  fireBaseAuth,
  getAuthResult,
  getLogOut,
} from "../../modules/firebase/controllers/auth";
import { AuthStatus } from "../../modules/firebase/types";
import { UserContext } from "./context";

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const checkAuth = useCallback(() => {
    getAuthResult((user) => setUser(user));
  }, []);
  const logIn = () => {
    fireBaseAuth((user) => setUser(user));
  };
  const logOut = useCallback(() => {
    const deleteUser = () => setUser(null);
    const getMessage = (type: AuthStatus) => {
      console.log("log out status:", type);
      if (type === "error") {
        checkAuth();
      }
    };

    getLogOut(deleteUser, getMessage);
  }, []);

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

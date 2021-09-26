import { User } from "@firebase/auth";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import {
  getAuthResult,
  getLogOut,
} from "../../modules/firebase/controllers/auth";
import { AuthStatus } from "../../modules/firebase/types";
import { UserContext } from "./context";

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const checkAuth = useCallback((logIn?: boolean) => {
    getAuthResult((user) => setUser(user), logIn);
  }, []);
  const logIn = useCallback(() => {
    checkAuth(true);
  }, []);
  const logOut = useCallback(() => {
    const deleteUser = () => setUser(null);
    const getMessage = (type: AuthStatus) => {
      console.log(type);
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

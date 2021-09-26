import { User } from "@firebase/auth";
import { createContext } from "react";

interface UserContext {
  user: User | null;
  checkAuth: () => void;
  logIn: () => void;
  logOut: () => void;
}

const defaultContext: UserContext = {
  user: null,
  checkAuth: () => null,
  logIn: () => null,
  logOut: () => null,
};
export const UserContext = createContext(defaultContext);

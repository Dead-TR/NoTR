import { ErrorPage, Main, Notes } from "../../pages";
import { PageList } from "./types";

export const appPageList: PageList[] = [
  {
    path: "/notes",
    component: Notes,
  },
  {
    path: "/",
    redirect: "/notes",
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "*",
    component: ErrorPage,
  },
];

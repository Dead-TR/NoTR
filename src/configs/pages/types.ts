import { FC } from "react";

export interface PageList {
  path: string;
  component?: (() => JSX.Element) | FC | (() => FC);
  redirect?: string;
}

import { FC } from "react";

export interface PageList {
  path: string;
  component?: FC;
  redirect?: string;
}

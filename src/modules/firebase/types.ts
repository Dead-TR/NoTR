import { NoteElement } from "providers";

export type AuthStatus = "success" | "error";
export interface FireBaseListProps {
  list: NoteElement[];
}

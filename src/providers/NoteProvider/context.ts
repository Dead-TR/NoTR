import { createContext } from "react";
import { NoteContext } from "./types";

const defaultContext: NoteContext = {
  notes: {
    cloud: [],
    local: [],
    isDataReceived: false,
  },
  setNotes: () => null,
  addNote: () => null,
};
export const NotesContext = createContext(defaultContext);

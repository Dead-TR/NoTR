import { createContext } from "react";
import { NoteElement, Notes } from ".";

interface NoteContext {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
  addNote: (value: NoteElement, place: keyof Notes) => void;
}

const defaultContext: NoteContext = {
  notes: {
    cloud: [],
    local: [],
  },
  setNotes: () => null,
  addNote: () => null,
};
export const NotesContext = createContext(defaultContext);

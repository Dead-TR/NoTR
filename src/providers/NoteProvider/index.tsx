import { FC, useContext, useEffect, useState } from "react";

import { NotesContext } from "./context";

export interface NoteElement {
  name: string;
  title: string;
  text: string;
  color?: string;
}

export interface Notes {
  local: NoteElement[];
  cloud: NoteElement[];
}

const localNotesName = "localNotes";

export const NotesContextProvider: FC = ({ children }) => {
  const [notes, setNotes] = useState<Notes>({
    cloud: [],
    local: [],
  });

  const addNote = (value: NoteElement, place: "local" | "cloud") => {
    setNotes({
      ...notes,
      [place]: [...notes.local, value],
    });
  };

  useEffect(() => {
    const local = JSON.parse(
      localStorage.getItem(localNotesName) || "[]"
    ) as NoteElement[];

    setNotes({
      ...notes,
      local,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(localNotesName, JSON.stringify(notes.local));
  }, [notes.local]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);

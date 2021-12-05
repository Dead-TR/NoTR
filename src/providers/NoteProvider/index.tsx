import { FC, useContext, useEffect, useState } from "react";

import { NotesContext } from "./context";
import { useUser } from "providers";
import { addNotesToCloud, getNotesFromCloud } from "modules";
import { Notes, NoteElement } from "./types";
const localNotesName = "localNotes";

export const NotesContextProvider: FC = ({ children }) => {
  const { user } = useUser();
  const [notes, setNotes] = useState<Notes>({
    cloud: [],
    local: [],
  });

  const addNote = (value: NoteElement, place: "local" | "cloud") => {
    setNotes({
      ...notes,
      [place]: [...notes[place], value],
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
    const { cloud, local } = notes;
    localStorage.setItem(localNotesName, JSON.stringify(local));

    if (user) {
      addNotesToCloud(user.uid, cloud);
    } else {
      setNotes({
        ...notes,
        cloud: [],
      });
    }
  }, [notes]);

  useEffect(() => {
    if (user) {
      getNotesFromCloud(user.uid, (cloud) => {
        setNotes({
          ...notes,
          cloud,
        });
      });
    }
  }, [user]);

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

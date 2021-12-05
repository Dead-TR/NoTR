import { FC, useContext, useEffect, useState } from "react";

import { TabValue, useUser } from "providers";
import { addNotesToCloud, getNotesFromCloud } from "modules";

import { NotesContext } from "./context";
import { Notes, NoteElement } from "./types";
import { LOCAL_NOTES_NAME } from "./consts";

export const NotesContextProvider: FC = ({ children }) => {
  const { user } = useUser();
  const [notes, setNotes] = useState<Notes>({
    cloud: [],
    local: JSON.parse(
      localStorage.getItem(LOCAL_NOTES_NAME) || "[]"
    ) as NoteElement[],

    isDataReceived: false,
  });

  const addNote = (value: NoteElement, place: TabValue) => {
    setNotes({
      ...notes,
      [place]: [...notes[place], value],
    });
  };

  useEffect(() => {
    if (user) {
      getNotesFromCloud(user.uid, (cloud) => {
        setNotes({
          ...notes,
          cloud,
          isDataReceived: true,
        });
      });
    } else {
      setNotes({
        ...notes,
        cloud: [],
        isDataReceived: false,
      });
    }
  }, [user]);

  useEffect(() => {
    const { cloud, local, isDataReceived } = notes;
    localStorage.setItem(LOCAL_NOTES_NAME, JSON.stringify(local));

    if (user && isDataReceived) {
      addNotesToCloud(user.uid, cloud);
    }
  }, [notes]);

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

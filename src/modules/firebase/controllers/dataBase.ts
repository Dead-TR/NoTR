import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import { dataBase, FireBaseListProps } from "modules";
import { NoteElement } from "providers";
import { createGuard } from "utils";

const noteElementGuardian = createGuard<FireBaseListProps>("list");

export const getNotesFromCloud = async (
  userId: string,
  middleware: (data: NoteElement[]) => void
) => {
  const firebaseNoteData = await getDocs(collection(dataBase, userId));

  firebaseNoteData.forEach((v) => {
    const notes = v.data();
    debugger;

    if (noteElementGuardian(notes)) {
      middleware(notes.list);
    }
  });
};

export const addNotesToCloud = async (userId: string, notes: NoteElement[]) => {
  setDoc(doc(dataBase, userId, "notes"), {
    list: notes,
  });
};

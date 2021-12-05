export interface NoteContext {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
  addNote: (value: NoteElement, place: keyof Notes) => void;
}

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

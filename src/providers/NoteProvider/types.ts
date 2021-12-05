export type TabValue = "local" | "cloud";
export interface NoteContext {
  notes: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes>>;
  addNote: (value: NoteElement, place: TabValue) => void;
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
  isDataReceived: boolean;
}

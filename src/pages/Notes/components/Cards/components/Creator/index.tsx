import React, { ChangeEvent, FC, useState } from "react";
import { Button, Card, Input } from "components";
import { NoteElement, useNotes } from "providers/NoteProvider";

import ColorSelect from "./components/ColorSelect";
import css from "./style.module.scss";

interface Props {
  onClose: () => void;
}

export const Creator: FC<Props> = ({ onClose }) => {
  const { addNote } = useNotes();
  const [cardData, setCardData] = useState<NoteElement>({
    name: "",
    title: "",
    text: "",
  });

  const handleChangeName = (ev: ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      name: ev.target.value,
    });
  };

  const handleChangeTitle = (ev: ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      title: ev.target.value,
    });
  };

  const handleChangeText = (ev: ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      text: ev.target.value,
    });
  };

  const handleChangeColor = (value: string) => {
    setCardData({
      ...cardData,
      color: value,
    });
  };

  const handleCreateNote = (event: React.FormEvent<HTMLFormElement>) => {
    debugger;
    event.preventDefault();
    addNote(cardData, "local");
    setTimeout(() => {
      onClose();
    }, 0);
  };

  return (
    <div className={css.root}>
      <form className={css.control} onSubmit={handleCreateNote}>
        <Input label="Card Name" onChange={handleChangeName} required />
        <Input label="Card Title" onChange={handleChangeTitle} required />
        <Input label="Card Text" onChange={handleChangeText} required />
        <ColorSelect onChange={handleChangeColor} />

        <Button>Add card</Button>
      </form>
      <Card {...cardData} />
    </div>
  );
};

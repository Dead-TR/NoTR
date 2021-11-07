import React, { ChangeEvent, FC, useState } from "react";
import { Button, Card, Input } from "components";
import { useWindowSize } from "hooks";

import { NoteElement, useNotes } from "providers/NoteProvider";
import closeURL from "assets/icons/close.svg";

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
    event.preventDefault();
    addNote(cardData, "local");
    setTimeout(() => {
      onClose();
    }, 0);
  };

  const { isMobile } = useWindowSize();

  return (
    <div className={css.root}>
      <img
        src={closeURL}
        alt="Close"
        className={css.closeIcon}
        onClick={onClose}
      />
      <form className={css.control} onSubmit={handleCreateNote}>
        <Input
          classes={{
            label: css.textLabel,
          }}
          label="Card Name"
          placeholder={isMobile ? "Card Name" : ""}
          onChange={handleChangeName}
        />
        <Input
          classes={{
            label: css.textLabel,
          }}
          label="Card Title"
          placeholder={isMobile ? "Card Title" : ""}
          onChange={handleChangeTitle}
        />
        <Input
          classes={{
            label: css.textLabel,
          }}
          label="Card Text"
          placeholder={isMobile ? "Card Text" : ""}
          onChange={handleChangeText}
        />
        <ColorSelect className={css.colorSelect} onChange={handleChangeColor} />

        <Button>Add card</Button>
      </form>
      <Card
        {...cardData}
        classes={{
          root: css.card,
        }}
      />
    </div>
  );
};

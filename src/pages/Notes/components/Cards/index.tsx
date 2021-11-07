import React, { useRef, useState } from "react";

import { Card } from "components";

import addIconUrl from "assets/icons/add.svg";
import css from "./style.module.scss";
import { Creator } from "./components";
import { Modal } from "pop-ups";
import { useNotes } from "providers/NoteProvider";

export const Cards = () => {
  const { notes, setNotes } = useNotes();
  const [creatorIsOpen, setCreatorIsOpen] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const closeCreator = () => setCreatorIsOpen(false);
  const openCreator = () => setCreatorIsOpen(true);

  const deleteCard = (iterator: number) => {
    if (iterator <= notes.local.length) {
      notes.local.splice(iterator, 1);
    }

    setNotes({ ...notes });
  };

  return (
    <div className={css.root}>
      <button
        className={css.addButton}
        ref={addButtonRef}
        onClick={openCreator}
      >
        <img src={addIconUrl} alt="add" className={css.addButton__img} />
      </button>

      <Modal isOpen={creatorIsOpen} onClose={closeCreator} background="dark">
        <Creator onClose={closeCreator} />
      </Modal>

      <div className={css.cardWrapper}>
        {notes.local.map((note, i) => {
          return <Card {...note} deleteCard={() => deleteCard(i)} />;
        })}
      </div>
    </div>
  );
};

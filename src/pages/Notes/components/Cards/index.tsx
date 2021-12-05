import React, { FC, useRef, useState } from "react";

import { Notes, useNotes } from "providers";
import { Card } from "components";
import { Modal } from "pop-ups";

import addIconUrl from "assets/icons/add.svg";
import { Creator } from "./components";
import css from "./style.module.scss";

interface Props {
  activeTab: keyof Notes;
}

export const Cards: FC<Props> = ({ activeTab }) => {
  const { notes, setNotes } = useNotes();
  const [creatorIsOpen, setCreatorIsOpen] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const closeCreator = () => setCreatorIsOpen(false);
  const openCreator = () => setCreatorIsOpen(true);

  const deleteCard = (iterator: number) => {
    if (iterator <= notes[activeTab].length) {
      notes[activeTab].splice(iterator, 1);
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
        <Creator onClose={closeCreator} activeTab={activeTab} />
      </Modal>

      <div className={css.cardWrapper}>
        {notes[activeTab].map((note, i) => {
          return <Card {...note} deleteCard={() => deleteCard(i)} />;
        })}
      </div>
    </div>
  );
};

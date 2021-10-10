import React, { useRef, useState } from "react";

import { Card } from "components";

import addIconUrl from "assets/icons/add.svg";
import css from "./style.module.scss";
import { Creator } from "./components";
import { PopUpMenu } from "pop-ups";
import { useNotes } from "providers/NoteProvider";

export const Cards = () => {
  const { notes } = useNotes();
  const [creatorIsOpen, setCreatorIsOpen] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const closeCreator = () => setCreatorIsOpen(false);
  const openCreator = () => setCreatorIsOpen(true);

  return (
    <div className={css.root}>
      <button
        className={css.addButton}
        ref={addButtonRef}
        onClick={openCreator}
      >
        <img src={addIconUrl} alt="add" className={css.addButton__img} />
      </button>

      <PopUpMenu
        isOpen={creatorIsOpen}
        onClose={closeCreator}
        anchor={addButtonRef.current}
        background="dark"
      >
        <Creator onClose={closeCreator} />
      </PopUpMenu>

      <div className={css.cardWrapper}>
        {notes.local.map((note) => {
          return <Card {...note} />;
        })}
      </div>
    </div>
  );
};

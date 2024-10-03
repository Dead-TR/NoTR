import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "providers";
import { NotesContextProvider } from "providers/NoteProvider";

export const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <NotesContextProvider>{children}</NotesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
};

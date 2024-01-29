import React from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
  const s1 = {
    "name": "virat",
    "class": "6b"
  }
  return (
    <NotesContext.Provider value={s1}>
      {props.children}
    </NotesContext.Provider>
  )
}
export default NotesState;

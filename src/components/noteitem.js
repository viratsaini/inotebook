import React, { useContext } from 'react'
import NotesContext from "../context/note/NotesContext"

const Noteitem = (props) => {
  const context = useContext(NotesContext);
   const { deleteNote } = context;
  const { notes } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: " 18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">
          {notes.description}  </p>
          <p className="card-text">
          {notes.tag} </p>
          <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(notes._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

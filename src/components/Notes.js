import React, { useContext } from 'react'
import contextValue from "../context/note/NotesContext"
import Noteitem from './noteitem';
import AddNote from './AddNote';


const Notes = () => {
    const context = useContext(contextValue);
  const {notes,setnotes}=context;
  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((notes)=>{
        return <Noteitem key={notes._id} notes={notes}/>
 
      })}
    </div>
    </>
  )
}

export default Notes

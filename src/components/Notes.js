import React, { useContext } from 'react'
import contextValue from "../context/note/NotesContext"
import Noteitem from './noteitem';


const Notes = () => {
    const context = useContext(contextValue);
  const {notes,setnotes}=context;
  return (
    
    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((notes)=>{
        return <Noteitem notes={notes}/>
 
      })}
    </div>
   
  )
}

export default Notes

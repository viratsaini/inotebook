import React ,{useContext}from 'react'
import NotesContext from '../context/note/NotesContext'


const About = () => {
  const a = useContext(NotesContext);
  return (
    <div>
     <h1> this is About {a.name}</h1>
    </div>
  )
}

export default About

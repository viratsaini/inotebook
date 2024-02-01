import React ,{useState}from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
  const host="http://localhost:5000"
  const initialnotes=
    [    ]
   const [notes, setnotes] = useState(initialnotes)
      
   //fetch all  notes
    const getNote=async()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", 
       
        headers: {
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNDRhZDgwZjM4N2Y2NzIyNDZiYmZjIn0sImlhdCI6MTcwNTU5NTkzNX0.UxMb8EPC43uCghe1MrOs21K28IA5D6ILD4dZ0pTVIBg"
        },
        
         
      });
      
      const json=await response.json();
      console.log(json);
      setnotes(json)
    }

   //add notes
    const addNote=async(title,description,tag)=>{
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST", 
       
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNDRhZDgwZjM4N2Y2NzIyNDZiYmZjIn0sImlhdCI6MTcwNTU5NTkzNX0.UxMb8EPC43uCghe1MrOs21K28IA5D6ILD4dZ0pTVIBg"
        },
        
        body: JSON.stringify({title,description,tag}), 
      });
      const addNote=(title,description,tag)=>{
        console.log("add a new note");
        const note={
          "_id": "65af6a31267e364b13bbb708",
          "userid": "65a44ad80f387f672246bbfc",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-01-23T07:26:41.647Z",
          "__v": 0
        }
  setnotes(notes.concat(note))
      // const json=response.json();
    }}

   //delete notes
const deleteNote=(id)=>{
    console.log("Delete note with id: "+id)
    const newNote=()=>notes.filter((note)=>{return note._id!==id})
setnotes(newNote)
}
   //edit notes
const editNote=async(id,title,description,tag)=>{
  //Api call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "POST", 
   
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhNDRhZDgwZjM4N2Y2NzIyNDZiYmZjIn0sImlhdCI6MTcwNTU5NTkzNX0.UxMb8EPC43uCghe1MrOs21K28IA5D6ILD4dZ0pTVIBg"
    },
    
    body: JSON.stringify({title,description,tag}), 
  });
  // const json=response.json();
  //Logic to edit notes
   for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if(element._id===id){
      element.title=title;
      element.description=description;
      element.tag=tag;
    }
   }
}
  return (
    <NotesContext.Provider value={{notes,setnotes,addNote,editNote,deleteNote,getNote}}>
      {props.children}
    </NotesContext.Provider>
  )
}
export default NotesState;

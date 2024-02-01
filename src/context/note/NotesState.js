import React ,{useState}from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
  const initialnotes=
    [
      {
        "_id": "65a9672f1cdf3605bc874651",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "userid": "65a44ad80f387f672246bbfc",
        "__v": 0,
        "date": "2024-01-31T16:58:34.199Z"
      },
      {
        "_id": "65a96741e91812df6fabc9c5",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "userid": "65a44ad80f387f672246bbfc",
        "date": "2024-01-18T18:00:33.204Z",
        "__v": 0
      },
      {
        "_id": "65a9676abab7919b8a587176",
        "userid": "65a44ad80f387f672246bbfc",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "date": "2024-01-18T18:01:14.017Z",
        "__v": 0
      },
      {
        "_id": "65a967aec25afbdc529b8acb",
        "userid": "65a44ad80f387f672246bbfc",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "date": "2024-01-18T18:02:22.646Z",
        "__v": 0
      },
      {
        "_id": "65aacce1a55c64d8b1950cc6",
        "userid": "65a44ad80f387f672246bbfc",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "date": "2024-01-19T19:26:25.368Z",
        "__v": 0
      },
      {
        "_id": "65aad47f3aa6c6649af501c9",
        "userid": "65a44ad80f387f672246bbfc",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "date": "2024-01-19T19:58:55.806Z",
        "__v": 0
      },
      {
        "_id": "65af654dbd72f41566146ff3",
        "userid": "65a44ad80f387f672246bbfc",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "date": "2024-01-23T07:05:49.875Z",
        "__v": 0
      },
      {
        "_id": "65af6a31267e364b13bbb708",
        "userid": "65a44ad80f387f672246bbfc",
        "title": "dbms notes",
        "description": "unit 1 notes",
        "tag": "good",
        "date": "2024-01-23T07:26:41.647Z",
        "__v": 0
      }
    ]
   const [notes, setnotes] = useState(initialnotes)
      
   //add notes
    const addNote=(title,description,tag)=>{
      console.log("add a new note");
      const note={
        "_id": "65af6a31267e364b13bbb708",
        "userid": "65a44ad80f387f672246bbfc",
        "title": title,
        "description": description,
        "tag": "good",
        "date": "2024-01-23T07:26:41.647Z",
        "__v": 0
      }
setnotes(notes.concat(note))
    }
   //delete notes
const deleteNote=(id)=>{

}
   //edit notes
const editNote=(id)=>{

}
  return (
    <NotesContext.Provider value={{notes,setnotes,addNote,editNote,deleteNote}}>
      {props.children}
    </NotesContext.Provider>
  )
}
export default NotesState;

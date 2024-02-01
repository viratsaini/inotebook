import React, { useContext ,useState} from 'react'
import contextValue from "../context/note/NotesContext";

const AddNote = () => {
  const context = useContext(contextValue);
  const { addNote } = context;
  const [note, setnote] = useState({title:"",tag:"",description:""})
  const HandelClick = (e) => {
e.preventDefault();
      addNote(note.title,note.description,note.tag);
  };
  const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title"  className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              name="title"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={onChange}
              name="description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="teg" className="form-label">
              Teg
            </label>
            <input
              type="tag"
              className="form-control"
              id="tag"
              onChange={onChange}
              name="tag"
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HandelClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

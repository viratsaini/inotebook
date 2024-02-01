import React from "react";

const noteitem = (props) => {
  const { notes } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: " 18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">
          {notes.description}  </p>
          <i className="fa-solid fa-trash-can mx-2"></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default noteitem;

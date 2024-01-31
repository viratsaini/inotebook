import React from "react";

const noteitem = (props) => {
  const { notes } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3" style={{ width: " 18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{notes.title}</h5>
          <p class="card-text">
          {notes.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam libero esse eligendi tempore, delectus accusamus? Esse eius laudantium sed nam voluptatem quo asperiores reiciendis numquam, iure vitae, facere aut?
          </p>
        </div>
      </div>
    </div>
  );
};

export default noteitem;

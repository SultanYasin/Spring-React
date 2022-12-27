

import React, { Fragment, useState } from "react";

const EditTodo = (props) => {
  const [description, setDescription] = useState(props.todo.description);
  const [title, setTitle] = useState(props.todo.title);

  //edit description function

 const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description, title };
      const response = await fetch(
        `http://localhost:8080/dashboard/update/${props.todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      ).then(props.updateState)
    } catch (err) {
      console.error(err.message);
    }
  };
 


  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${props.todo.id}`}
      >
        Edit
      </button>

 
      <div
        className="modal"
        id={`id${props.todo.id}`}
        onClick={() => setDescription(props.todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(props.todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(props.todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
;

export default EditTodo;

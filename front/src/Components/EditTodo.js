/*  import React, { Fragment, useState } from "react";


const EditTodo = (  props) => {
 
  const [updateDescription, setUpdateDescription] = useState(props.todo.description); 
  const [updateTitle, setUpdateTitle] = useState(props.todo.title); 
  const [err, setErr] = useState(null)


  const update = async (e) => {
    e.preventDefault();
    try {
      const body = { updateTitle, updateDescription }; 
      await fetch(`http://localhost:8080/dashboard/update/${props.todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
       
      })
  
      .then(props.updateState)
    } catch (err) {
      setErr(err.message);
    }
      
  };

    const handleState=()=>{   
      setUpdateDescription(props.todo.description)
      setUpdateTitle(props.todo.title)
    }

  return (
    <Fragment >
      <button type="button" className="btn btn-warning" data-toggle="modal" 
      data-target={`#id${props.todo.id}`} onClick={e=>update(e)} >
        Edit
      </button>
              
      <div
        className="modal"
        id={`id${props.todo.id}`}
        onClick={() => setUpdateDescription(props.todo.description)}
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"                
                onClick={handleState}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                placeholder="title"
                type="text"
                className="form-control"
                value={updateTitle} 
                onChange={(e) => setUpdateTitle(e.target.value)}
              />
                <input type="text" className="form-control"
                 value={updateDescription} onChange={(e) => setUpdateDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button type="button" 
              className="btn btn-warning" data-dismiss="modal" 
              onClick={(e) => update(e) } >              
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setUpdateDescription(props.todo.description) }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {err && <div>{err}</div> }
    </Fragment>
  );
};

export default EditTodo;

 

 */

import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
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
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                classNameName="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
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
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
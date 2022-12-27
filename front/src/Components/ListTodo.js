import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = (props) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(null)




  const deleteTodo = async (id) => {
    try {
       const response = await fetch(`http://localhost:8080/dashboard/delete/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.id !== id)); 
      if (response.ok) {
        console.log(`Item with id ${id} was deleted successfully.`);
      }
    } catch (err) {
      setErr(err.message);
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/dashboard/getAll",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      setErr(err.message);
      console.error(err.message);
    }
  };

  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { title, description };
       await fetch("http://localhost:8080/dashboard/create", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(body),
      }).then(getTodos)

    } catch (err) {
      setErr(err.message);
      console.error(err.message);
    }finally{
      setTitle("")
      setDescription("")
    }
  };

useEffect(() => { getTodos(); }, []); 
 

  return (
    <Fragment>


<h3 className="text-center mt-5">Add new Todo</h3>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input
          type="text"
          className="form-control"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
       <br/>
        <input
          type="text"
          className="form-control"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        
        
        <button className="btn btn-success"  >Add</button>
      </form>

      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
              {/*   <UpdateModal todo={todo} updateState = {getTodos} deleteTodo = {deleteTodo} /> */}
                 <EditTodo setTodosState = {setTodos} 
                todo={todo} todos = {todos} updateState = {getTodos}
                /> 
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {err && <div>{err}</div> }
    </Fragment>
  );
};

export default ListTodos;

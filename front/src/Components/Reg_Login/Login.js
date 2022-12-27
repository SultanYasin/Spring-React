import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";


export default function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [err, setErr] = useState(null)


  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
       fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          username: username,
          password: password,
        },
      }).then((response) => {
        if (response.ok) {
          const gToken = response.headers.get("Authorization")
          setToken(gToken);
          localStorage.setItem('token' ,gToken)
          navigate('/home')
        }
                
      });
    } catch (err) {
      setErr(err.message);
    } finally {    
      setUsername("");
      setPassword("");
    }


  }
  return (
    <div style={{ height:"100vh" }}>
     <div className="section"  >
      <div className="container" style={{ margin:"25vh auto " , width:"400px" }}>
        <form onSubmit={handleSubmit}>
          <div className="section text-center">
            <h4 className="mb-4 pb-3">Log In</h4>
            <div className="form-group">
              <input
                autoFocus
                type="text"
                name="username"
                placeholder="username"
                id="logemail"
                autoComplete="off"
                className="form-style"
                required="required"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-2">
              <input
                className="form-style"
                id="logpass"
                autoComplete="off"
                type="password"
                name="password"
                value={password}
                placeholder="password"
                required="required"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button onSubmit={handleSubmit} className="btn mt-4">
              Login
            </button>
            <p className="mb-0 mt-4 text-center">
              Do not have an account ? &nbsp;
              <span>
                <a href="./register" className="link" style={{color: "orange"}} >
                  Register
                </a>
              </span>
            </p>
          </div>
        </form>
        {err && <div>{err}</div> }
      </div>
     </div>
    </div>
  );
}

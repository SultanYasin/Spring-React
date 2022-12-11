import axios from "axios";
import React, { useState } from "react";
import login from "../style/login.css";
import { use } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit(event) {
    console.log(" start.........");
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
          setToken(response.headers.get("x-genratedtoken"));
          console.log("navigate to home");
          navigate("/home");
        } else {
          console.log("not ok");
        }
      });
    } catch (err) {
      console.error(err.message);
    } finally {
      setUsername("");
      setPassword("");
    }
  }
  return (
    <div className="section">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <form onSubmit={handleSubmit}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
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
                              <a href="./Register" className="link">
                                Register
                              </a>
                            </span>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

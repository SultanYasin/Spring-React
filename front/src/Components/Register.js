import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/register", {
        username: username,
        password: password,
      });

      console.log("User Registation Successfully");

      setUsername("");
      setPassword("");
    } catch (err) {
      console.log("User Registation Failed");
    }
  }

  const checkPassword = () => {
    if (password || password2 === "") {
      alert("Password fild can not be empty");
    }

    if (valueOf(password) !== valueOf(password2))
      alert("Password did not match");
  };

  
  return (
    <div>
      <div className="section">
        <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <div>
                            <form onSubmit={handleSubmit}>
                              <div className="section text-center">
                                <h4 className="mb-4 pb-3">Sign Up</h4>                                 
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    className="form-style"
                                    placeholder="Your Name"
                                    id="logname"
                                    autoComplete="off"
                                    onChange={(event) => {
                                      setUsername(event.target.value);
                                    }}
                                  />
                                  <i className="input-icon uil uil-user"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    name="password"
                                    className="form-style"
                                    placeholder="Your password"
                                    id="logemail"
                                    autoComplete="off"
                                    required="required"
                                    onChange={(event) => {
                                      setPassword(event.target.value);
                                    }}
                                    
                                  />
                                  <i className="input-icon uil uil-at"></i>
                                </div>
                                <div className="form-group mt-2">
                                  <input
                                    type="password"
                                    name="password"
                                    className="form-style"
                                    placeholder="Repet Your Password"
                                    id="logpass"
                                    autoComplete="off"
                                    required="required"
                                    onChange={(event) => {
                                      setPassword2 (event.target.value);
                                    }}
                                  />
                                  <i className="input-icon uil uil-lock-alt"></i>
                                </div>
                                <button
                                  onSubmit={handleSubmit}
                                  className="btn mt-4"
                                >
                                  submit
                                </button>
                              </div>
                            </form>
                          </div>

                          <p className="mb-0 mt-4 text-center">
                            Back to &nbsp;
                            <span>
                              <a
                                href="./Login"
                                className="link"
                                style={{ color: "lightgreen" }}
                              >
                                Login
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
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

export default Register;
/* 
      <form  onSubmit={handleSubmit}>
        <br></br>
        <h1>Register</h1>
        <p>Fill in the Information Below</p>


        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />


        <button type="submit">Register</button>
      </form>
<div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>


  const register = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: "sssa",
      password: "sss",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const res = await fetch("http://localhost:8080/register", requestOptions)
      .then((response) => {
        response.json();
        console.log(response);
        if (response.ok) console.log("new user has been registerd");
      })
      .catch((error) => console.error("error: \n", error));
  }; */

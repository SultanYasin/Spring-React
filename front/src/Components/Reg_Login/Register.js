import axios from "axios";
import { useState } from "react";



function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(null)


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      var regularExpression =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
      if (!regularExpression.test(password)) {
        setErr(err.message);
        alert(
          "password should contain atleast one number and one special character"
        );
        return false;
      }
      if (password !== confirmPassword) {   
        alert("password did not match ");
        return;
      }
      await axios.post("http://localhost:8080/register", {
        username: username,
        password: password,
      }); 
      alert("User Registation Successfully");
      window.location='login'
      
    } catch (err) {
      setErr(err.message);
      console.log("User Registation Failed");
    }finally{
      
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <div style={{ margin:"25vh auto " , width:"400px" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="section text-center">
            <h4 className="mb-4 pb-3">Sign Up</h4>
            <div className="form-group">
              <input
                autoFocus
                type="text"
                name="username"
                className="form-style"
                placeholder="Your Name"
                id="logname"
                value={username}
                autoComplete="off"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2">
              <input
                autoFocus
                type="password"
                name="password"
                className="form-style"
                placeholder="Your password"
                id="logemail"
                autoComplete="off"
                required="required"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                autoFocus
                type="password"
                name="password"
                className="form-style"
                placeholder="Repet your password"
                id="logpass"
                autoComplete="off"
                value={confirmPassword}
                required="required"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />

              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button onSubmit={handleSubmit} className="btn mt-4">
              submit
            </button>
          </div>
        </form>
      </div>

      <p className="mb-0 mt-4 text-center">
        Back to &nbsp;
        <span>
          <a href="./Login" className="link" style={{ color: "lightgreen" }}>
            Login
          </a>
        </span>
      </p>
        {err && <div>{err}</div> }
    </div>
  );
}

export default Register;

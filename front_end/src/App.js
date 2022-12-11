import React,{useState} from 'react'
import axios from 'axios';

export default function App() {

  const [jwtToken, setJwtToken] = useState(""); //LocalStorage("", "jwt");

  const register = async () => {
    console.log("Registering new user ...");

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "ss",
  "password": "ss"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

/* 
    const loginCredentials = { username: "ss", password: "ss" };
    const res = await fetch("http://localhost:8080/register", {
      headers: {
        "Content-Type": "applciation/json",
        "username" : "ss",
        "passord" : "ss"
      },
      method: "POST",
      body: JSON.stringify(loginCredentials),
    }); */
  };
  console.log("\n ____________________________________________________ \n");

  const login = async () => {
    console.log("Login ...");


var myHeaders = new Headers();
myHeaders.append("username", "ss");
myHeaders.append("password", "ss");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:8080/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then((res) => Promise.all([res.json(), res.headers]))
  .then(([body, headers]) => {
    const token = headers.get("x-generatedToken");
    setJwtToken(token);
    console.log("token is : " + jwtToken);
    console.log("token befoer set" + token)
    console.log("\n _____________________________________________ \n");
  })
  .catch(error => console.log('error', error));




/* 

    const res = await fetch("http://localhost:8080/login", {
      headers: {
        "Content-Type": "applciation/json",
        "username": "ss",
        "password": "ss",
      },
      method: "POST",
      body: JSON.stringify(),
    }) */

    }

    const getProtected = async () => {
      const res = await axios.get("http://localhost:8080/info");
      console.log(res);
      console.log("\n ____________________________________________________ \n");
    };

  return (
    <div>
      <div>
        <button onClick={register}>register</button>
        <button onClick={login}>login</button>
        <button onClick={getProtected}>info</button>
      </div>
    </div>
  )
}

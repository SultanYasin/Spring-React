import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {


const reqBody = {"username" : "sul", "password" : "ss"}
const getToken = async () =>{ 
  console.log("getting token__________")
  try {
    
 const response = await fetch("login" , {
headers:{
  "Content-Type": "application/json",
},
method: "POST",
body: JSON.stringify(reqBody)
})
  .then((res) => Promise.all([res.json() , res.headers]))
  .then(([body , headers]) =>{
    const authValue = headers.get("generatedToken");
    console.log("token is : " + authValue)
    console.log(body)
  }) 
  } catch (error) {
    console.error(error.message)
  }

}
const getInfo = async ()=> {
  
  console.log("start______")
  await fetch("/info" , {
  headers:{
    "Content-Type" : "application/json",
    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWwifQ._qZlaz02QuVB0ek-KP7j5kbv4PfDzVjOX5TAbbmgz_s"
},
  method:"GET",
 }).then(res => console.log(res.json()))}


  return (
    <div className="App">
      HI <br />
    
      <button onClick={getInfo} >get info</button>
      <button onClick={getToken} >get token</button>
    </div>
  );
}

export default App;

/*
  {/*  
   <button onClick={()=> createUser()} >create user</button>
   <input type="password" placeholder="pwd" value={password} />
   <input type="text" placeholder="name" value={username} />} 

----


 fetch("/info" , {
  headers:{
    "Content-Type" : "application/json",
    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdWx0YW5ZIn0.FA6zQbirpqMixyE_zi2eGDOsfw5UJ-tlxQuww3Xa7uk"

},
  method:"GET",
  
 }).then(res => console.log(res.json()))

    
  const createUser = fetch("/register", {
    headers:{"Content-Type" : "application/json"},
    method:"POST",
    body: JSON.stringify(data)
  })

const getToken = fetch("/login" , {
headers:{"Content-Type": "application/json"},
method: "PSOT",
body: JSON.stringify(createUser)
})
  .then((res) => Promise.all([res.json() , res.headers]))
  .then(([body , headers]) =>{
    const authValue = headers.get("Authorization");
    console.log("token is : " + authValue)
    console.log(body)
  } ) */

/* const handleChangeName = (e) => {
  const newValue = e.target.value;
  setUsername(newValue)
}
const handleChangePwd = e => {
  const newValue = e.target.value;
  setPassword(newValue)
}

console.log(username)
console.log(password)


 */


  //axios.get("/a1");
/*   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [Login, setLogin] = useState(false);
  const [reg, setReg] = useState(false);

  const data = { username: "SultanY", password: "asd" };
  const token =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdWx0YW5ZIn0.FA6zQbirpqMixyE_zi2eGDOsfw5UJ-tlxQuww3Xa7uk";

  const register = async () => {
    setReg(true);

    try {
      const register = fetch("register", {
        headers: {
          "Content-Type": "application/json",
          username: "Sutlans",
          password: "aaa",
        },
        method: "POST",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = async () => {
    setLogin(true);

    try {
      const response = await fetch("login", {
        headers: {
          "Content-Type": "application/json",
          username: "Sutlans",
          password: "aaa",
        },
        method: "POST",
      });

      if (!response.ok) throw new Error("Error : " + response.status);
      const result = await response.json();
      console.log("result is : " + JSON.stringify(result, null, 4));
    } catch (error) {
      console.error(error.message);
    }
  }; */

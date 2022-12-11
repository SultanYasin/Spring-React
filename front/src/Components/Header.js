import axios from "axios";
import React from "react";

function Header() {
  
 
    try {
       axios
        .post("http://localhost:8080/login", {
          username: "s",
          password: "1",
        })
        .then((res) => {
          for (let entry of res.headers) console.log(res.get(""));
        })
       

      console.log("User login Successfully");
    } catch (err) {
      console.log(err.message);
    }
 

  return (
    <div>
      Header
     
    </div>
  );
}

export default Header;

/* 
onSubmit={ getToken}
    var myHeaders = new Headers();
myHeaders.append("username", "s");
myHeaders.append("password", "1");


async function getToken(){
console.log("start to get token.....")

const res = await fetch("http://localhost:8080/login", {
  
    headers: myHeaders,
    method: "POST",
    redirect: 'follow'
})
  .then(response => response.json())
  .then(res => {
    for (let entry of res.headers) console.log(entry)
  }).then(data => console.log("\n ________" + data))

  //.then((response) => response.forEach(element => console.log) )
  .catch(error => console.log('error', error));
} */

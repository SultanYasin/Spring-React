import "./App.css";
import LocalStorage from "./util/LocalStorage";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PrivateRouteWrappar from "./Components/PrivateRouteWrappar";
import Header from "./Components/Header";

function App() {
  const [jwt, setJwt] = LocalStorage("", "jwt");

  const getProtected = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzc3NhIn0.yTnCmR9WN5PE0fcyYz2s1nupXxWnfamNQ_rKgschTFM"
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("http://localhost:8080/info", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Routes>
      <Route
        path="/home"
        element={
          <PrivateRouteWrappar>
            {" "}
            <Home />
          </PrivateRouteWrappar>
        }
      /> */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="header" element={<Header />} />
    </Routes>
  );
}

export default App;
/*
<button onClick={register}>register</button>
    <div className="App">
      
      <button onClick={login}>login</button>
      <button onClick={getProtected}>info</button>
      <button onClick={Register}>Register</button> 
    </div>*
*/

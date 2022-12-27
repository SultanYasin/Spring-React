import "./App.css";
import React , {useEffect}from 'react'
import Register from "./Components/Reg_Login/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Reg_Login/Login";
import Landing from "./Components/Landing";

function App() {

  const navigate = useNavigate();

  useEffect(() => { if(!localStorage.getItem('token')){navigate('/')} }, [])
  


  return (
    <Routes>
      
      <Route path="" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />   
      <Route path="home" element={<Home />} />
    
    </Routes>
  );
}

export default App;
/*



  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />        
     <Route path="home" element={ <ProtectedRouteWrappar> <Home /> </ProtectedRouteWrappar> } />
    </Routes>
  );

<button onClick={register}>register</button>
    <div className="App">
      
      <button onClick={login}>login</button>
      <button onClick={getProtected}>info</button>
      <button onClick={Register}>Register</button> 
    </div>*
*/

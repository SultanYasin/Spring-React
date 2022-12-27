import React from "react";
import { useNavigate } from "react-router-dom";


function Landing() {

  const navaigate = useNavigate();

  const bgImage = new URL("../landing.png",import.meta.url)

  return (
    <div style={{ overflowY:"hidden", overflow:"hidden"}}>

        <img src={bgImage} alt="bgImage" style={{backgroundRepeat : "no-repeat", height:"100vh", width:"100%" }} />
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => navaigate('Login')} style={{position:"sticky", bottom: "216px"}} >Sign in</button>
        <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => navaigate('Register') } style={{position:"sticky", bottom: "140px"}} >Sign up</button>

    </div>
  );
}

export default Landing;

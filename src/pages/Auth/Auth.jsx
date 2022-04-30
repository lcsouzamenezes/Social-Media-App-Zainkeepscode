import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>

          <div>
            <input type="text" placeholder="Username" className="infoInput" />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
            />
          </div>

          <button className="button infoButton">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import {Link, useParams} from 'react-router-dom';
const Auth = () => {

  let params = useParams();

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {params.authForm === 'login'?<LogIn/>:<SignUp/>}
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input type="text" placeholder="Username" className="infoInput" />
        </div>

        <div>
          <input type="password" className="infoInput" placeholder="Password" />
        </div>

        <div>
          <Link to='/signup'>
          <span style={{ fontSize: "12px" }}>Don't have an account Sign up</span>
          </Link>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input type="text" placeholder="First Name" className="infoInput" />
          <input type="text" placeholder="Last Name" className="infoInput" />
        </div>
        <div>
          <input type="text" placeholder="Username" className="infoInput" />
        </div>
        <div>
          <input type="password" className="infoInput" placeholder="Password" />
          <input
            type="password"
            className="infoInput"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <Link to='/login'>
          <span style={{ fontSize: "12px" }}>Already have an account Login</span>
          </Link>
          <button className="button infoButton">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;

import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link, useParams } from "react-router-dom";

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
      {params.authForm === "login" ? <LogIn /> : <SignUp />}
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <Link to="/signup">
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
          </Link>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = ()=>{
    if(data.password === data.confirmpass)
    {

    }
  }







  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name='username'
            value={data.username}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}

          />
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <Link to="/login">
            <span style={{ fontSize: "12px" }}>
              Already have an account Login
            </span>
          </Link>
          <button className="button infoButton" type="Submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;

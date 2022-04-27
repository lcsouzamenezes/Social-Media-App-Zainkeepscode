import React from "react";
import ProfileSide from "../components/profileSide/ProfileSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
};

export default Home;

import React from "react";
import { Followers } from "../../Data/FollwersData";
import "./FollowersCard.css";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower" id={id}>
            <div>
              <img src={follower.img} alt="profile" className="followerImage" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}

      <span>Show more</span>
    </div>
  );
};

export default FollowersCard;

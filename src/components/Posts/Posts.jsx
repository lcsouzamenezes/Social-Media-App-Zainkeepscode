import React from "react";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;

import React from "react";
import { CreatePost } from "../createPost/CreatePost";
import { Post } from "../post/Post";
const Feed = () => {
  return (
    <div className="bg-gray-900">
      <CreatePost />
      <div className="mt-4 gap-4 flex flex-col">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export { Feed };

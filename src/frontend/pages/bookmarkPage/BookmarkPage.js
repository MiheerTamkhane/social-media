import React from "react";
import { Post } from "../../components";

const BookmarkPage = () => {
  return (
    <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export { BookmarkPage };

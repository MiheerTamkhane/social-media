import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../components";
const BookmarkPage = () => {
  const { data } = useSelector((state) => state.savedPosts);
  return (
    <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4 w-96">
      {data.length > 0 ? (
        data?.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1 className="p-4 text-4xl text-center font-['jost'] min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4 w-96">
          No saved posts!
        </h1>
      )}
    </div>
  );
};

export { BookmarkPage };

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../components";
import { getBookmarkPosts } from "../../features";
const BookmarkPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.savedPosts);
  console.log(data);
  return (
    <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
      {data.length > 0 ? (
        data?.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1 className="p-4 text-4xl text-center font-['jost']">
          No saved posts!
        </h1>
      )}
    </div>
  );
};

export { BookmarkPage };

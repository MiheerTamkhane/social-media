import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { Post } from "../../components";
import { sortPosts } from "../../utils";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);
  const sortedPosts = sortPosts(posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
      {sortedPosts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export { ExplorePage };

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { Post } from "../../components";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export { ExplorePage };

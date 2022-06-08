import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { CreatePost } from "../createPost/CreatePost";
import { Post } from "../post/Post";
import { sortPosts, getUserFeed } from "../../utils";
const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);
  const { user } = useSelector((state) => state.auth);
  const { following, username } = user;
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const sortedPosts = getUserFeed(posts, following, username);
  const userFeed = sortPosts(sortedPosts);

  return (
    <div className="bg-gray-900">
      <CreatePost />
      <div className="mt-4 gap-4 flex flex-col">
        {userFeed.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export { Feed };

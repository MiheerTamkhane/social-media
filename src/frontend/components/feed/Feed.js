import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { CreatePost } from "../createPost/CreatePost";
import { Post } from "../post/Post";
import {
  getUserFeed,
  filterPostsByDate,
  filterPostsByTrending,
} from "../../utils";
const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);
  const { sortByDate, sortByTrending } = useSelector(
    (state) => state.feedFilters
  );
  const {
    user: { following, username },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  console.log(posts);
  const userFeed = getUserFeed(posts, following, username);
  const sortedBydate = filterPostsByDate(userFeed, sortByDate);
  const sortedByTrend = filterPostsByTrending(sortedBydate, sortByTrending);
  return (
    <div className="bg-gray-900">
      <CreatePost />
      <div className="mt-4 gap-4 flex flex-col">
        {sortedByTrend?.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export { Feed };

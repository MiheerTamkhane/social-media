import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { Post } from "../../components";
import {} from "../../utils";
import {
  sortPosts,
  filterPostsByDate,
  filterPostsByTrending,
} from "../../utils";
const ExplorePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);
  const { sortByDate, sortByTrending } = useSelector(
    (state) => state.feedFilters
  );
  const sortedPosts = sortPosts(posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  const sortedBydate = filterPostsByDate(sortedPosts, sortByDate);
  const sortedByTrend = filterPostsByTrending(sortedBydate, sortByTrending);
  return (
    <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
      {sortedByTrend.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export { ExplorePage };

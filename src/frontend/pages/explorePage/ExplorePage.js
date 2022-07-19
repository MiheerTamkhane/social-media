import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getBookmarkPosts } from "../../features";
import { Post, Loader } from "../../components";
import {} from "../../utils";
import {
  sortPosts,
  filterPostsByDate,
  filterPostsByTrending,
} from "../../utils";
const ExplorePage = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.allPosts);
  const { sortByDate, sortByTrending } = useSelector(
    (state) => state.feedFilters
  );
  const { authToken: token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    dispatch(getBookmarkPosts(token));
  }, [dispatch, token]);

  const sortedPosts = sortPosts(posts);
  const sortedBydate = filterPostsByDate(sortedPosts, sortByDate);
  const sortedByTrend = filterPostsByTrending(sortedBydate, sortByTrending);
  return (
    <div className="bg-gray-900 flex items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
          {sortedByTrend.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
};

export { ExplorePage };

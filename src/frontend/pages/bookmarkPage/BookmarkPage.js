import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post, Loader } from "../../components";
import { getBookmarkPosts } from "../../features";
const BookmarkPage = () => {
  const dispatch = useDispatch();
  const { bookmarkedPosts, isLoading } = useSelector(
    (state) => state?.savedPosts
  );
  const { authToken: token } = useSelector((state) => state?.auth);
  const { posts } = useSelector((state) => state.allPosts);
  useEffect(() => {
    dispatch(getBookmarkPosts(token));
  }, [dispatch, token]);

  const savedPosts = posts.filter((post) =>
    bookmarkedPosts.find((bookmarked) => bookmarked._id === post._id)
  );
  return (
    <div className="flex items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {bookmarkedPosts.length > 0 ? (
            savedPosts.map((post) => {
              return <Post key={post._id} post={post} />;
            })
          ) : (
            <div className="w-full flex flex-row">
              <h1 className="p-4 text-4xl text-center text-white font-['jost']">
                No saved posts!
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { BookmarkPage };

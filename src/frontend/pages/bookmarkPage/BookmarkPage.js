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
  useEffect(() => {
    dispatch(getBookmarkPosts(token));
  }, [dispatch, token]);
  return (
    <div className="flex items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {bookmarkedPosts.length > 0 ? (
            bookmarkedPosts.map((post) => {
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

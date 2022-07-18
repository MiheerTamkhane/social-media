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
    <div className="bg-gray-900 flex items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col gap-4">
          {bookmarkedPosts.length > 0 ? (
            bookmarkedPosts.map((post) => {
              return <Post key={post._id} post={post} />;
            })
          ) : (
            <div className="w-full mx-44 flex flex-row md:m-16 maxmidmd:m-2">
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

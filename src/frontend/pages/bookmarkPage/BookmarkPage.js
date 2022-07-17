import { useSelector } from "react-redux";
import { Post, Loader } from "../../components";

const BookmarkPage = () => {
  const { data, isLoading } = useSelector((state) => state?.savedPosts);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col gap-4">
          {data.length > 0 ? (
            data.map((post) => {
              return <Post key={post._id} post={post} />;
            })
          ) : (
            <h1 className="p-4 text-4xl text-center text-white font-['jost'] w-full">
              No saved posts!
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export { BookmarkPage };

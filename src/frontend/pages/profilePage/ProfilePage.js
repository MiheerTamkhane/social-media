import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser, getUserAllPosts } from "../../features";
import { Post } from "../../components";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, posts } = useSelector((state) => state.singleUser);
  const { username } = useParams();
  useEffect(() => {
    dispatch(getSingleUser(username));
    dispatch(getUserAllPosts(username));
  }, [dispatch, username, posts, user]);
  return (
    <div>
      <div className="min-h-96 h-fit mb-4 rounded-lg bg-gray-800 text-white">
        <div className="h-44">
          <img src="/assets/user-bg.jpeg" alt="user-bg" />
        </div>

        <div className="flex justify-center relative">
          <img
            src={user?.avatarURL || "/assets/male.jpg"}
            alt="user-profile-img"
            className="rounded-full h-20 w-20 border-8 border-double border-gray-400 absolute -top-10"
          />
          <button
            type="button"
            className="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-4 py-2 text-center absolute right-2 top-0 maxmidmd:text-xs"
          >
            Edit
          </button>
        </div>

        <div>
          <div className="flex justify-center mt-10">
            <h2 className="font-semibold ">
              {user?.firstName
                ? `${user?.firstName} ${user?.lastName}`
                : "Username"}
            </h2>
          </div>
          <div className="flex justify-center gap-2 mt-1">
            <div className="flex flex-col items-center w-20 cursor-pointer">
              <span className="text-lg font-semibold font-['rajdhani']">
                {user?.followers?.length || "0"}
              </span>
              <span className="text-xs text-gray-400">Followers</span>
            </div>
            <div className="flex flex-col items-center w-20 cursor-pointer">
              <span className="text-lg font-semibold font-['rajdhani']">
                {posts?.length || "0"}
              </span>
              <span className="text-xs text-gray-400">Posts</span>
            </div>
            <div className="flex flex-col items-center w-20 cursor-pointer">
              <span className="text-lg font-semibold font-['rajdhani']">
                {" "}
                {user?.following?.length || "0"}
              </span>
              <span className="text-xs text-gray-400">Following</span>
            </div>
          </div>
          <div className="ml-4 pb-4 mt-2 w-5/6">
            <h3 className="text-gray-300">@{user?.username}</h3>
            <p className="font-['rajdhani'] tracking-wide">
              {user?.bio ?? "Your Bio"}
            </p>
            <a
              href={user?.website ?? "https://www.google.com"}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
            >
              {user?.website ?? "Website"}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export { ProfilePage };

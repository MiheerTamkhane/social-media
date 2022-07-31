import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser, getUserAllPosts, clearUser } from "../../features";
import { Post, UpdateProfile, Loader } from "../../components";
import { sortPosts } from "../../utils";
const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { user, posts } = useSelector((state) => state.singleUser);
  const { posts: allPosts } = useSelector((state) => state.allPosts);
  const { username } = useParams();

  useEffect(() => {
    return () => dispatch(clearUser());
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getSingleUser(username));
    dispatch(getUserAllPosts(username));
  }, [allPosts, username, dispatch]);

  const userPosts = sortPosts(posts);

  return (
    <div className="bg-gray-900 flex items-center">
      {posts.length === 0 ? (
        <Loader />
      ) : (
        <div className="min-h-screen mb-4 rounded-lg bg-gray-900 text-white flex flex-col gap-4">
          {showModal && <UpdateProfile setShowModal={setShowModal} />}
          <div className="min-h-fit mb-4 rounded-lg bg-gray-800 text-white">
            <div className="object-fill w-full">
              <img src="/assets/user-bg.jpeg" alt="user-bg" />
            </div>

            <div className="flex justify-center relative">
              <img
                src={user?.avatarURL || "/assets/male.jpg"}
                alt="user-profile-img"
                className="rounded-full h-20 w-20 border-8 border-double border-gray-400 absolute -top-10"
              />
              <button
                onClick={() => setShowModal(true)}
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
                  className="underline text-blue-400 hover:text-blue-600 visited:text-purple-600"
                  target="_blank"
                >
                  {user?.website ?? "Website"}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {userPosts?.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { ProfilePage };

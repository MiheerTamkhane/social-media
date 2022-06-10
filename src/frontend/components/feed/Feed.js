import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { CreatePost } from "../createPost/CreatePost";
import { Post } from "../post/Post";
import { Modal } from "../modal/Modal";
import { sortPosts, getUserFeed } from "../../utils";
const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allPosts);

  const {
    user: { following, username },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const sortedPosts = getUserFeed(posts, following, username);
  const userFeed = sortPosts(sortedPosts);

  return (
    <div className="bg-gray-900">
      <CreatePost />
      {/* <Modal>
        <input type="text" />
        <button>Comment</button>
      </Modal> */}
      <div className="mt-4 gap-4 flex flex-col">
        {userFeed?.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export { Feed };

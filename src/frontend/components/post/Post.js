import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import toast from "react-hot-toast";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  deletePost,
  likePost,
  dislikePost,
  bookmarkPost,
  removeBookmarkPost,
} from "../../features";

import { EditPost } from "../editPost/EditPost";
import { PostComments } from "../postComments/PostComments";

const Post = ({ post }) => {
  const { _id, username, content, avatarURL, createdAt, likes, comments } =
    post;
  const { authToken, user } = useSelector((state) => state.auth);
  const { data: bookmarks } = useSelector((state) => state.savedPosts);
  const [modalOpen, setModalOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (id, token) => {
    dispatch(deletePost({ postId: id, token }));
    toast.success("Post Deleted!");
  };

  const likeHandler = (id, token) => {
    dispatch(likePost({ postId: id, token }));
  };

  const dislikeHandler = (id, token) => {
    dispatch(dislikePost({ postId: id, token }));
  };

  const fanBoys = likes.likedBy.map((fan) => fan.username);
  return (
    <div className="h-fit rounded-lg bg-gray-800 text-white relative">
      {modalOpen && (
        <EditPost
          setModalOpen={setModalOpen}
          post={post}
          authToken={authToken}
        />
      )}
      <div className="flex justify-between relative">
        <div className="p-2 ml-4 flex w-full items-center">
          <img
            src={avatarURL}
            className="mr-1 rounded-full h-10 w-10"
            alt={username + "Avtar"}
          />
          <div className="flex flex-col ml-1">
            <span className="text-lg tracking-wide font-['jost']">
              {username}
            </span>
            <span className="text-xs text-gray-400">
              {moment(Date.parse(createdAt)).fromNow()}
            </span>
          </div>
        </div>
        <div className="p-2 mr-2 flex items-center ">
          <Menu
            menuButton={
              <MenuButton>
                <span className="material-icons-outlined mr-6 text-4xl text-gray-400 ">
                  more_horiz
                </span>
              </MenuButton>
            }
            transition
          >
            <MenuItem onClick={() => setModalOpen(true)}>Edit</MenuItem>
            <MenuItem onClick={() => deleteHandler(_id, authToken)}>
              Delete
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className=" h-48 border-b border-t border-gray-500 text-left text-md font-['rajdhani'] leading-6 flex flex-col  overflow-scroll scrollbar-hide">
        <p className="px-6 py-2">{content}</p>
      </div>
      <div className="p-1 max-w-full flex justify-around">
        {fanBoys.includes(user.username) ? (
          <button
            onClick={() => dislikeHandler(_id, authToken)}
            className="inline-flex items-center px-4 py-2 text-white text-md font-medium rounded-lg
         bg-gray-700 
        "
          >
            <span className="material-icons-round text-green-400 mr-2">
              thumb_up
            </span>
            {likes.likeCount}
          </button>
        ) : (
          <button
            onClick={() => likeHandler(_id, authToken)}
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300
         
        "
          >
            <span className="material-icons-outlined text-gray-400 mr-2">
              thumb_up
            </span>
            {likes.likeCount}
          </button>
        )}

        <button
          className={`inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 ${
            showComments && "bg-gray-700"
          }`}
          onClick={() => setShowComments((comment) => !comment)}
        >
          <span
            className={
              showComments
                ? "material-icons text-green-400 mr-2"
                : "material-icons-outlined text-gray-400 mr-2"
            }
          >
            comment
          </span>
          {comments.length}
        </button>

        {bookmarks?.find((post) => post._id === _id) ? (
          <button
            onClick={() => {
              dispatch(removeBookmarkPost({ postId: _id, token: authToken }));
              toast.success("Removed from bookmarks!");
            }}
            className={`inline-flex items-center px-4 py-2  hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 bg-gray-700`}
          >
            <span className="material-icons text-green-400">bookmark</span>
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(bookmarkPost({ postId: _id, token: authToken }));
              toast.success("Post saved!");
            }}
            className={`inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 `}
          >
            <span className="material-icons-round text-gray-400">
              turned_in_not
            </span>
          </button>
        )}
      </div>
      {showComments && (
        <PostComments post={post} setShowComments={setShowComments} />
      )}
    </div>
  );
};

export { Post };

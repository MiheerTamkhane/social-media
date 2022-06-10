import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import toast from "react-hot-toast";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { deletePost, editPost, likePost, dislikePost } from "../../features";
import { Modal } from "../modal/Modal";
import "./Post.css";
const Post = ({ post }) => {
  const {
    _id,
    username,
    content,
    avatarURL,
    createdAt,
    firstName,
    lastName,
    likes,
  } = post;
  const { authToken, user } = useSelector((state) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    avatarURL,
    firstName,
    lastName,
    username,
    comments: [],
    content: "",
  });
  const dispatch = useDispatch();

  const deleteHandler = (id, token) => {
    dispatch(deletePost({ postId: id, token }));
    toast.success("Post Deleted!");
  };
  const editPostHandler = (id, postData, token) => {
    dispatch(editPost({ postId: id, postData, token }));
    setUpdatedPost({
      avatarURL,
      firstName,
      lastName,
      username,
      comments: [],
      content: "",
    });
    setModalOpen(false);
    toast.success("Post Updated!");
  };

  const likeHandler = (id, token) => {
    dispatch(likePost({ postId: id, token }));
  };
  const dislikeHandler = (id, token) => {
    dispatch(dislikePost({ postId: id, token }));
  };

  const fanBoys = likes.likedBy.map((fan) => fan.username);
  return (
    <div className="h-80 rounded-lg bg-gray-800 text-white relative">
      {modalOpen && (
        <Modal setShowModal={setModalOpen}>
          <div>
            <h1 className="mb-2  text-xl">Update Here</h1>
            <textarea
              onChange={(e) =>
                setUpdatedPost({ ...updatedPost, content: e.target.value })
              }
              value={updatedPost.content}
              name="status"
              className=" text-white bg-gray-800 p-2 border-none outline-none tracking-wider resize-none scrollbar-hide"
              placeholder="Share your post here!"
            ></textarea>
            <button
              onClick={() => {
                editPostHandler(_id, updatedPost, authToken);
              }}
              type="button"
              className="focus:outline-none text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:bg-gray-700 dark:focus:ring-gray-700"
            >
              Update
            </button>
          </div>
        </Modal>
      )}
      <div className="flex justify-between relative">
        <div className="p-2 ml-4 flex w-full items-center">
          <img
            src={avatarURL}
            className="mr-1 rounded-full h-10 w-10"
            alt="Otakusurf user"
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
        {/* This feature will add soon  */}
        {/* <img
          className=" object-cover w-full h-full  "
          src="https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg"
          alt=""
        /> */}
      </div>
      <div className="p-3 max-w-full flex justify-around">
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
            Liked {likes.likeCount}
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
            Like {likes.likeCount}
          </button>
        )}

        <button className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700 ">
          <span className="material-icons-outlined text-gray-400 mr-2">
            comment
          </span>
          Comment
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700 ">
          <span className="material-icons-round text-gray-400 mr-2">
            turned_in_not
          </span>
          Bookmark
        </button>
      </div>
    </div>
  );
};

export { Post };

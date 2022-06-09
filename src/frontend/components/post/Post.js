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
  // console.log(likes);
  // console.log(post);
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
      <div className="p-3 w-full flex justify-around">
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
            Liked 4
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
            Like 3
          </button>
        )}

        <button className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700 ">
          <svg
            viewBox="0 0 32 32"
            className="h-5 mr-2 fill-gray-400  text-white svg-change"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g id="Chat">
              <path d="M24,17H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" />
              <path d="M24,7H8A1,1,0,0,0,8,9H24a1,1,0,0,0,0-2Z" />
              <path d="M24,12H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" />
              <path d="M25,2H7A5,5,0,0,0,2,7V27.11a3,3,0,0,0,3,3,3,3,0,0,0,1.75-.56l6.81-4.87A3,3,0,0,1,15.45,24H25a5,5,0,0,0,5-5V7A5,5,0,0,0,25,2Zm3,17a3,3,0,0,1-3,3H15.45a4.94,4.94,0,0,0-3.11,1.09L5.58,27.92a1,1,0,0,1-1,.08A1,1,0,0,1,4,27.11V7A3,3,0,0,1,7,4H25a3,3,0,0,1,3,3Z" />
            </g>
          </svg>
          Comment
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700 ">
          <svg
            viewBox="0 0 24 24"
            className="h-5 mr-2 fill-gray-400  text-white svg-change"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2C5.44772 2 5 2.44772 5 3V20.5925C5 21.4516 6.01192 21.9108 6.6585 21.345L10.0245 18.3998C11.1556 17.4101 12.8444 17.4101 13.9755 18.3998L17.3415 21.345C17.9881 21.9108 19 21.4516 19 20.5925V3C19 2.44772 18.5523 2 18 2H6ZM3 3C3 1.34315 4.34315 0 6 0H18C19.6569 0 21 1.34315 21 3V20.5925C21 23.1699 17.9642 24.5475 16.0245 22.8502L12.6585 19.905C12.2815 19.5751 11.7185 19.5751 11.3415 19.905L7.97551 22.8502C6.03576 24.5475 3 23.1699 3 20.5925V3Z"
            />
          </svg>
          Bookmark
        </button>
      </div>
    </div>
  );
};

export { Post };

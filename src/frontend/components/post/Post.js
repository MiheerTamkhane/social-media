import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import toast from "react-hot-toast";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  deletePost,
  editPost,
  likePost,
  dislikePost,
  addComment,
  deleteComment,
  editComment,
  upvoteComment,
  downvoteComment,
} from "../../features";
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
    comments,
  } = post;
  const { authToken, user } = useSelector((state) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [updateCommentModal, setUpdateCommentModal] = useState({
    status: false,
    post_id: null,
  });
  const [editedComment, setEditedComment] = useState("");
  const [newComment, setNewComment] = useState("");
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
  const addCommentHandler = (id, newComment, token) => {
    if (newComment !== "" && newComment.replace(/\s/g, "")) {
      dispatch(
        addComment({ postId: id, commentData: { text: newComment }, token })
      );
      setNewComment("");
      setShowComments(true);
      toast.success("Comment Added!");
    } else {
      toast.error("Fill the field!");
    }
  };
  const deleteCommentHandler = (id, commentId, token) => {
    dispatch(deleteComment({ postId: id, commentId, token }));
    toast.success("Comment Removed!");
  };

  const editCommentHandler = (id, commentId, editedComment, token) => {
    if (editedComment !== "" && editedComment.replace(/\s/g, "")) {
      dispatch(
        editComment({
          postId: id,
          commentId,
          commentData: { text: editedComment },
          token,
        })
      );
      setEditedComment("");
      setShowComments(true);
      toast.success("Comment Updated!");
    } else {
      toast.error("Fill the field!");
    }
  };

  const fanBoys = likes.likedBy.map((fan) => fan.username);
  return (
    <div className="h-fit rounded-lg bg-gray-800 text-white relative">
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
        {/* This feature will add soon  */}
        {/* <img
          className=" object-cover w-full h-full  "
          src="https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg"
          alt=""
        /> */}
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
                ? "material-icons text-green-400"
                : "material-icons-outlined text-gray-400"
            }
          >
            comment
          </span>
        </button>
        <button
          className={`inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-medium rounded-lg btn-hover transition-all duration-300 focus:bg-gray-700`}
        >
          <span className="material-icons-round text-gray-400">
            turned_in_not
          </span>
        </button>
      </div>

      {showComments && (
        <>
          <div className="min-h-fit overflow-scroll scrollbar-hide border-t border-1 border-gray-500 flex gap-2 flex-col">
            {comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <div className="border-b p-2 maxmidmd:p-0  border-gray-700 rounded-lg flex items-center justify-between w-full ">
                    <div className="flex items-center w-full">
                      <div className="flex items-center min-w-fit maxmidmd:text-sm">
                        <img
                          className="mr-1 rounded-full h-10 w-10"
                          src={comment.avatarURL || "/assets/male.jpg"}
                          alt={comment.username + "avatar"}
                        />
                        <div className="flex flex-col">
                          <p className="font-['rajdhani'] font-semibold text-gray-300 text-sm">
                            {comment.username}
                          </p>
                          <div className="flex items-center text-gray-300">
                            <span
                              onClick={() => {
                                dispatch(
                                  upvoteComment({
                                    postId: _id,
                                    commentId: comment?._id,
                                    token: authToken,
                                  })
                                );
                              }}
                              className={`material-icons cursor-pointer ${
                                comment?.votes?.upvotedBy.find(
                                  (item) => item.username === user.username
                                )
                                  ? "text-purple-600"
                                  : "text-gray-400"
                              }`}
                            >
                              arrow_drop_up
                            </span>
                            <span className="text-sm">
                              {" "}
                              {comment?.votes?.upvotedBy.length}
                            </span>
                            <span
                              className={`material-icons cursor-pointer ${
                                comment?.votes?.downvotedBy.find(
                                  (item) => item.username === user.username
                                )
                                  ? "text-red-600"
                                  : "text-gray-400"
                              }`}
                              onClick={() => {
                                dispatch(
                                  downvoteComment({
                                    postId: _id,
                                    commentId: comment?._id,
                                    token: authToken,
                                  })
                                );
                              }}
                            >
                              arrow_drop_down
                            </span>
                            <span className="text-sm">
                              {" "}
                              {comment?.votes?.downvotedBy.length}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap ml-2">{comment.text}</div>
                    </div>
                    {comment.username === user.username && (
                      <>
                        <button
                          onClick={() => {
                            setUpdateCommentModal({
                              post_id: comment?._id,
                              status: true,
                            });
                          }}
                          className="material-icons text-gray-300 cursor-pointer mr-2"
                        >
                          edit_note
                        </button>
                        <button
                          onClick={() => {
                            const commentId = comment._id;
                            deleteCommentHandler(_id, commentId, authToken);
                          }}
                          className="material-icons text-gray-300 cursor-pointer"
                        >
                          delete_outline
                        </button>
                      </>
                    )}
                  </div>
                  {updateCommentModal.status &&
                  comment._id === updateCommentModal.post_id ? (
                    <div className="flex mb-2 px-2 pt-2">
                      <img
                        className="mr-1 rounded-full h-10 w-10"
                        src={user.avatarURL || "/assets/male.jpg"}
                        alt={user.username + "avatar"}
                      />
                      <input
                        type="text"
                        value={editedComment}
                        onChange={(e) => {
                          setEditedComment(e.target.value);
                        }}
                        className=" w-full
        px-3
        py-0.5
        text-sm
        font-normal
        text-gray-200
        bg-gray-800 bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0
 focus:bg-gray-700 focus:border-purple-600 focus:outline-none"
                        placeholder="Update comment"
                      />
                      <button
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center ml-1"
                        onClick={() => {
                          setEditedComment("");
                          setUpdateCommentModal({
                            ...updateCommentModal,
                            status: false,
                          });
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center ml-1"
                        onClick={() => {
                          const commentId = comment._id;
                          editCommentHandler(
                            _id,
                            commentId,
                            editedComment,
                            authToken
                          );
                        }}
                      >
                        update
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          {!updateCommentModal.status && (
            <div className="flex mb-2 px-2 pt-2">
              <img
                className="mr-1 rounded-full h-10 w-10"
                src={user.avatarURL || "/assets/male.jpg"}
                alt={user.username + "avatar"}
              />
              <input
                type="text"
                value={newComment}
                onChange={(e) => {
                  setNewComment(e.target.value);
                }}
                className=" w-full
        px-3
        py-0.5
        text-sm
        font-normal
        text-gray-200
        bg-gray-800 bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0
 focus:bg-gray-700 focus:border-purple-600 focus:outline-none"
                placeholder="Add a comment"
              />
              <button
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1"
                onClick={() => {
                  addCommentHandler(_id, newComment, authToken);
                }}
              >
                Comment
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { Post };

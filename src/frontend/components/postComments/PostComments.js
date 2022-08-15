import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  deleteComment,
  editComment,
  upvoteComment,
  downvoteComment,
  getBookmarkPosts,
} from "../../features";
const PostComments = ({ post, setShowComments }) => {
  const { _id, comments } = post;
  const dispatch = useDispatch();
  const { authToken, user } = useSelector((state) => state.auth);
  const [editedComment, setEditedComment] = useState("");
  const [newComment, setNewComment] = useState("");
  const [updateCommentModal, setUpdateCommentModal] = useState({
    status: false,
    post_id: null,
  });

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
  return (
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
                      src={comment.avatarURL || comment.fallbackAvatar}
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
                    src={user.avatarURL || user.fallbackAvatar}
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
            src={user.avatarURL || user.fallbackAvatar}
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
  );
};

export { PostComments };

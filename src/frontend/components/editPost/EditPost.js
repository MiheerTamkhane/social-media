import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Modal } from "../modal/Modal";
import { editPost } from "../../features";
const EditPost = ({ post, setModalOpen, authToken }) => {
  const { _id, username, avatarURL, firstName, lastName } = post;
  const [updatedPost, setUpdatedPost] = useState({
    avatarURL,
    firstName,
    lastName,
    username,
    comments: [],
    content: "",
  });
  const dispatch = useDispatch();
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
  return (
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
  );
};

export { EditPost };

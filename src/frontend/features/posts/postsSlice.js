import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const getAllPosts = createAsyncThunk("users/getAllPosts", async () => {
  const { data } = await axios.get("/api/posts");

  return data;
});

const createPost = createAsyncThunk(
  "user/createPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't Post!");
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue("Post can't delete!");
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      rejectWithValue("Post can't Edit!");
    }
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Couldn't like the post!");
    }
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Couldn't like the post!");
    }
  }
);

const getAllComments = createAsyncThunk(
  "post/allComments",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/comments/${postId}`);

      return data;
    } catch (err) {
      return rejectWithValue("Can't get Comment!");
    }
  }
);

const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        {
          headers: {
            authorization: token,
          },
        }
      );

      return data;
    } catch (err) {
      return rejectWithValue("Can't add Comment!");
    }
  }
);

const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't delete Comment!");
    }
  }
);

const editComment = createAsyncThunk(
  "post/editComment",
  async ({ postId, commentId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't update Comment!");
    }
  }
);

const upvoteComment = createAsyncThunk(
  "post/upvoteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't upvote Comment!");
    }
  }
);

const downvoteComment = createAsyncThunk(
  "post/downvoteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't upvote Comment!");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(state.error);
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [createPost.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [likePost.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [getAllComments.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [getAllComments.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [addComment.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [editComment.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [upvoteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [upvoteComment.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
    [downvoteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [downvoteComment.rejected]: (state, { payload }) => {
      state.error = payload;
      toast.error(state.error);
    },
  },
});

export const allPostsReducer = postsSlice.reducer;
export {
  getAllPosts,
  createPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
  getAllComments,
  addComment,
  deleteComment,
  editComment,
  upvoteComment,
  downvoteComment,
};

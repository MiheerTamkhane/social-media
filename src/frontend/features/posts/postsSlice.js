import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    },
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [createPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [likePost.pending]: (state) => {
      state.isLoading = true;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [likePost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dislikePost.pending]: (state) => {
      state.isLoading = true;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [addComment.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [editComment.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [upvoteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [upvoteComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [upvoteComment.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [downvoteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [downvoteComment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    [downvoteComment.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
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
  addComment,
  deleteComment,
  editComment,
  upvoteComment,
  downvoteComment,
};

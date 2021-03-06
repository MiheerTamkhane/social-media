import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  bookmarkedPosts: [],
  isLoading: false,
  error: "",
};

const getBookmarkPosts = createAsyncThunk(
  "posts/bookmarked",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue("Can't get bookmarked posts!");
    }
  }
);

const bookmarkPost = createAsyncThunk(
  "posts/bookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't save post!");
    }
  }
);
const removeBookmarkPost = createAsyncThunk(
  "posts/removeBookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't save post!");
    }
  }
);

const boomarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: {
    [getBookmarkPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookmarkPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookmarkedPosts = payload.bookmarks;
    },
    [getBookmarkPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(state.error);
    },
    [bookmarkPost.pending]: (state) => {
      state.isLoading = true;
    },
    [bookmarkPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookmarkedPosts = payload.bookmarks;
    },
    [bookmarkPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(state.error);
    },
    [removeBookmarkPost.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBookmarkPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookmarkedPosts = payload.bookmarks;
    },
    [removeBookmarkPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(state.error);
    },
  },
});

export const bookmarkReducer = boomarkSlice.reducer;
export { getBookmarkPosts, bookmarkPost, removeBookmarkPost };

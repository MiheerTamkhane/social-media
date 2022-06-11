import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const getBookmarkPosts = createAsyncThunk(
  "posts/bookmarked",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      console.error(err);
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
      console.error(err);
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
      console.error(err);
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
      state.data = payload.data;
    },
    [getBookmarkPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [bookmarkPost.pending]: (state) => {
      state.isLoading = true;
    },
    [bookmarkPost.fulfilled]: (state, { payload }) => {
      console.log("bookmark : ", payload);
      state.isLoading = false;
      state.data = payload.bookmarks;
    },
    [bookmarkPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeBookmarkPost.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBookmarkPost.fulfilled]: (state, { payload }) => {
      console.log("bookmark : ", payload);
      state.isLoading = false;
      state.data = payload.bookmarks;
    },
    [removeBookmarkPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const bookmarkReducer = boomarkSlice.reducer;
export { getBookmarkPosts, bookmarkPost, removeBookmarkPost };

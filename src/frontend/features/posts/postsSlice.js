import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const getAllPosts = createAsyncThunk(
  "users/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/posts");
      return data;
    } catch (err) {
      return rejectWithValue("Posts not found!");
    }
  }
);

const createPost = createAsyncThunk(
  "user/createPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    console.log("ha bhai");
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
      console.log("sthis is : ", payload);
      state.isLoading = false;
      state.posts = payload.posts.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
    },
    [createPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const allPostsReducer = postsSlice.reducer;
export { getAllPosts, createPost };

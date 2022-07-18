import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  user: null,
  posts: [],
  isLoading: false,
  status: null,
  error: null,
};
const getSingleUser = createAsyncThunk(
  "user/getSingleUser",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/${username}`);
      return data;
    } catch (err) {
      return rejectWithValue("User not found");
    }
  }
);

const getUserAllPosts = createAsyncThunk(
  "user/getUserAllPosts",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/posts/user/${username}`);
      return data;
    } catch (err) {
      return rejectWithValue("Post not found!");
    }
  }
);
const getUserAllPostsById = createAsyncThunk(
  "user/getUserAllPostsById",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/posts/${userId}`);
      return data;
    } catch (err) {
      return rejectWithValue("Post not found!");
    }
  }
);

const editUser = createAsyncThunk(
  "user/edit",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/api/users/edit",
        { userData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't update user profile!");
    }
  }
);

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.posts = [];
      state.isLoading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: {
    [getSingleUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.status = "success";
    },
    [getSingleUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.status = "rejected";
    },
    [getUserAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserAllPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
      state.status = "success";
    },
    [getUserAllPosts.pending]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.status = "rejected";
    },
    [getUserAllPostsById.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserAllPostsById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
      state.status = "success";
    },
    [getUserAllPostsById.pending]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.status = "rejected";
    },
    [editUser.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload.user;
      state.authToken = payload.encodedToken;
      state.isLoading = false;
    },
    [editUser.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload.error;
      state.isLoading = false;
      toast.error(state.error);
    },
  },
});

export const singleUserReducer = singleUserSlice.reducer;
export const { clearUser } = singleUserSlice.actions;
export { getSingleUser, getUserAllPosts, getUserAllPostsById, editUser };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: null,
  error: null,
};

const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

const followUser = createAsyncThunk(
  "users/userFollowers",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue("Can't follow user!");
    }
  }
);

const usersSliice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.users;
      state.status = "success";
    },
    [getAllUsers.rejected]: (state, { error }) => {
      state.error = error.message;
      state.status = "rejected";
    },
    [followUser.pending]: (state) => {
      state.isLoading = true;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users = payload.users;
      state.status = "success";
    },
    [followUser.pending]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.status = "rejected";
    },
  },
});

export const usersReducer = usersSliice.reducer;
export { getAllUsers, followUser };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  user: [],
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
      console.log(err);
      return rejectWithValue("User not found");
    }
  }
);

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.status = "idle";
      state.user = null;
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
      toast.error(state.error);
    },
  },
});

export const singleUserReducer = singleUserSlice.reducer;
export const { clearUser } = singleUserSlice.actions;
export { getSingleUser };

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
  },
});

export const usersReducer = usersSliice.reducer;
export { getAllUsers };

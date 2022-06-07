import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? null,
  authToken: localStorage.getItem("authToken") || "",
  status: null,
  error: null,
};

const loginThunk = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", user);
      return data;
    } catch (err) {
      return rejectWithValue("User with these credentials not found");
    }
  }
);

const signupThunk = createAsyncThunk(
  "user/signup",
  async (userDeatils, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", userDeatils);
      return data;
    } catch (err) {
      return rejectWithValue("Can't Signin sorry!");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authToken = "";
      localStorage.removeItem("authToken"), localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.status = "loading";
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload.foundUser;
      state.authToken = payload.encodedToken;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
      toast.error(state.error);
    },
    [signupThunk.pending]: (state) => {
      state.status = "loading";
    },
    [signupThunk.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload.createdUser;
      state.authToken = payload.encodedToken;
    },
    [signupThunk.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload.error;
      toast.error(state.error);
    },
  },
});

export { loginThunk, signupThunk };
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

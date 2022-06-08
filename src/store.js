import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  usersReducer,
  singleUserReducer,
} from "./frontend/features";
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    singleUser: singleUserReducer,
  },
});

export { store };

import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  usersReducer,
  singleUserReducer,
  allPostsReducer,
  bookmarkReducer,
  filterReducer,
} from "./frontend/features";
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    singleUser: singleUserReducer,
    allPosts: allPostsReducer,
    savedPosts: bookmarkReducer,
    feedFilters: filterReducer,
  },
});

export { store };

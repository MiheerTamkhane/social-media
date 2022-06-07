import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./frontend/features";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { store };

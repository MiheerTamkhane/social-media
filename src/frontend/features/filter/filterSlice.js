import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortByDate: "NEW_TO_OLD",
  sortByTrending: null,
};

const filterSlice = createSlice({
  name: "feedFilters",
  initialState,
  reducers: {
    filterByDate: (state, { payload }) => {
      state.sortByDate = payload;
    },
    filterByTrending: (state, { payload }) => {
      state.sortByTrending = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterByDate, filterByTrending } = filterSlice.actions;

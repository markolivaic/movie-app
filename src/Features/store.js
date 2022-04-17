import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import errorMiddleware from "./errorMiddleware";

export const store = configureStore({
  reducer: { games: gamesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware),
});

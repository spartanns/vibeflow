import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./slices/playerSlice";
import songReducer from "./slices/songSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    song: songReducer
  }
})

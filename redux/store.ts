import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./slices/playerSlice";
import songReducer from "./slices/songSlice";
import songsReducer from "./slices/songsSlice";
import artistReducer from "./slices/artistSlice";
import lyricsReducer from "./slices/lyricsSlice";
import resultsReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    song: songReducer,
    songs: songsReducer,
    artist: artistReducer,
    lyrics: lyricsReducer,
    results: resultsReducer
  }
})

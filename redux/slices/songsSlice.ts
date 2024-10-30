import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK';

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_SPOTIFY_API_KEY,
    "x-rapidapi-host": "spotify23.p.rapidapi.com"
  }
};

const initialState = {
  songs: []
};

export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async (query, thunkApi) => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();

      return data.tracks;
    } catch (err) {
      thunkApi.rejectWithValue({ error: err.message });
    }
  }
);

const songs = createSlice({
  name: "songs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      state.songs = action.payload;
    });
  }
});

export default songs.reducer;


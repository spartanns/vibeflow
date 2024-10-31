import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://spotify23.p.rapidapi.com/track_lyrics/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_SPOTIFY_API_KEY,
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

const initialState = {
  lyrics: []
};

export const fetchLyrics = createAsyncThunk(
  "lyrics/fetchLyrics",
  async (query, thunkApi) => {
    try {
      const res = await fetch(`${url}?id=${query}`, options);
      const data = await res.json();

      return data.lyrics;
    } catch (err) {
      thunkApi.rejectWithValue({ error: err.message });
    }
  }
);

const lyrics = createSlice({
  name: "lyrics",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLyrics.fulfilled, (state, action) => {
      state.lyrics = action.payload;
    });
  }
});

export default lyrics.reducer;

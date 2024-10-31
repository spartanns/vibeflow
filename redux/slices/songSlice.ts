import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://spotify23.p.rapidapi.com/tracks/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_SPOTIFY_API_KEY,
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

const initialState = {
  song: []
};

export const fetchSong = createAsyncThunk(
  "song/fetchSong",
  async (query, thunkApi) => {
    try {
      const res = await fetch(`${url}?ids=${query}`, options);
      const data = await res.json();

      return data.tracks[0];
    } catch (err) {
      thunkApi.rejectWithValue({ error: err.message });
    }
  }
);

const song = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.song = action.payload;
      console.log(state.song);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSong.fulfilled, (state, action) => {
      state.song = action.payload;
    })
  }
});

export const { setSong } = song.actions;

export default song.reducer;

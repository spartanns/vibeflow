import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://spotify23.p.rapidapi.com/artist_overview/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_SPOTIFY_API_KEY,
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

const initialState = {
  artist: []
};

export const fetchArtist = createAsyncThunk(
  "artist/fetchArtist",
  async (query, thunkApi) => {
    try {
      const res = await fetch(`${url}?id=${query}`, options);
      const data = await res.json();

      return data.data.artist;
    } catch (err) {
      thunkApi.rejectWithValue({ error: err.message });
    }
  }
);

const artist = createSlice({
  name: "artist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.fulfilled, (state, action) => {
      state.artist = action.payload;
    })
  }
});

export default artist.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_SPOTIFY_API_KEY,
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

const initialState = {
  results: []
};

export const fetchResults = createAsyncThunk(
  "results/fetchResults",
  async (query, thunkApi) => {
    try {
      const res = await fetch(`${url}&q=${query}`, options);
      const data = await res.json();

      return data.tracks.items;
    } catch (err) {
      thunkApi.rejectWithValue({ error: err.message });
    }
  }
);

const results = createSlice({
  name: "results",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchResults.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  }
});

export default results.reducer;

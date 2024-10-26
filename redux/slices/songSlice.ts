import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  song: []
};

const song = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.song = action.payload;
      console.log(state.song);
    }
  }
});

export const { setSong } = song.actions;

export default song.reducer;

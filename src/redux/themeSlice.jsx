import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export default themeSlice.reducer;
export const { toggleMode } = themeSlice.actions;

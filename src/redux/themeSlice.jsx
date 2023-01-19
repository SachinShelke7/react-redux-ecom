import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: sessionStorage.getItem("mode") === "true" ? true : false || null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
      sessionStorage.setItem("mode", state.mode);
    },
  },
});

export default themeSlice.reducer;
export const { toggleMode } = themeSlice.actions;

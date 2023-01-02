import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "STORE",
};

export const testSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = testSlice.actions;

export default testSlice.reducer;

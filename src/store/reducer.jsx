import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "initial action.value",
  data: "",
};

export const testSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    dataChange: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeName, dataChange } = testSlice.actions;

export default testSlice.reducer;

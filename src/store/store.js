import { configureStore } from "@reduxjs/toolkit";
import testSlice from "../store/reducer";
export const store = configureStore({
  reducer: {
    test: testSlice,
  },
});

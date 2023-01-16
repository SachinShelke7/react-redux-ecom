import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productReducer";
export const store = configureStore({
  reducer: {
    product: productsSlice,
  },
});

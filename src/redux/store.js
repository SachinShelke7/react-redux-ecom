import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productReducer";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    product: productsSlice,
    theme: themeSlice,
  },
});

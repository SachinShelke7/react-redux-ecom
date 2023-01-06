import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      img: "https://image.dummyjson.com/300x200/?text=productImage",
      img2: "https://image.dummyjson.com/300x200/?text=productImage2",
      title: "Product 1",
      isNew: true,
      oldPrice: 999,
      price: 799,
    },
    {
      id: 2,
      img: "https://image.dummyjson.com/300x200/?text=product2Image",
      img2: "https://image.dummyjson.com/300x200/?text=product2Image2",
      title: "Product 2",
      isNew: true,
      oldPrice: 1111,
      price: 899,
    },
    {
      id: 3,
      img: "https://image.dummyjson.com/300x200/?text=product3Image",
      img2: "https://image.dummyjson.com/300x200/?text=product3Image2",
      title: "Product 3",
      isNew: false,
      oldPrice: 599,
      price: 449,
    },
    {
      id: 4,
      img: "https://image.dummyjson.com/300x200/?text=product4Image",
      img2: "https://image.dummyjson.com/300x200/?text=product4Image2",
      title: "Product 4",
      isNew: false,
      oldPrice: 1499,
      price: 1299,
    },
  ],
};

export const productSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

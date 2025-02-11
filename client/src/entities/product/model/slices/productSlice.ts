import { createSlice } from "@reduxjs/toolkit";
import { ProductState, ProductType } from "../types/types";
import { fetchProducts } from "../services/fetchProducts";
import { deleteProduct } from "../services/deleteProduct";

const initialState: ProductState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.sort(
          (a: ProductType, b: ProductType) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        state.loading = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
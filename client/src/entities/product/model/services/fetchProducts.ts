import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Получение всех типов продукции
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(__API__);
  return response.data;
});

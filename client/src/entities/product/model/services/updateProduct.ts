import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../types/types";

// Обновление типа продукции
export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }: { id: string; data: Partial<ProductType> }) => {
    const response = await axios.patch(`${__API__}/${id}`, data);
    return response.data;
  }
);
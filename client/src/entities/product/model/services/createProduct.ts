import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../types/types";

// Создание типа продукции
export const createProduct = createAsyncThunk(
  "products/create",
  async (newProduct: Omit<ProductType, "id" | "createdAt">) => {
    const response = await axios.post(__API__, {
      ...newProduct,
      createdAt: new Date().toISOString(),
    });
    return response.data;
  }
);
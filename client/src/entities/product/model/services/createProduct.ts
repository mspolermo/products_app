import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../types/types";
import { getErrorMessage } from "@/shared/lib/getErrorMessage/getErrorMessage";

const DEFAULT_ERROR = 'Ошибка при создании продукта'

// Создание типа продукции
export const createProduct = createAsyncThunk(
  "products/create",
  async (newProduct: ProductType, { rejectWithValue }) => {
    const { id, createdAt, ...updateData } = newProduct;
    try {
      const response = await axios.post(__API__, {
        ...updateData,
        packsNumber: Number(updateData.packsNumber),
      });

      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error, DEFAULT_ERROR)
      return rejectWithValue(errorMessage);
    }
  }
);

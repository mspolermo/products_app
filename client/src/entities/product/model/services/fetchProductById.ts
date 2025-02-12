import { getErrorMessage } from "@/shared/lib/getErrorMessage/getErrorMessage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DEFAULT_ERROR = 'Ошибка загрузки продукта'

// Получение одного продукта по ID
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${__API__}/${productId}`);
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error, DEFAULT_ERROR)
      return rejectWithValue(errorMessage);
    }
  }
);

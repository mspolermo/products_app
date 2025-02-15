import { getErrorMessage } from "@/shared/lib/getErrorMessage/getErrorMessage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DEFAULT_ERROR = "Ошибка загрузки списка продуктов";

// Получение всех типов продукции
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(__API__);
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error, DEFAULT_ERROR)
      return rejectWithValue(errorMessage);
    }
  }
);

import { getErrorMessage } from "@/shared/lib/getErrorMessage/getErrorMessage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DEFAULT_ERROR = 'Ошибка при удалении продукта'

// Удаление типа продукции
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${__API__}/${id}`);
      return id;
    } catch (error) {
      const errorMessage = getErrorMessage(error, DEFAULT_ERROR)
      return rejectWithValue(errorMessage);
    }
  }
);

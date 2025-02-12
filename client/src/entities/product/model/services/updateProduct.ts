import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../types/types";
import { getErrorMessage } from "@/shared/lib/getErrorMessage/getErrorMessage";

const DEFAULT_ERROR = "Ошибка обновления продукта";

// Обновление типа продукции
export const updateProduct = createAsyncThunk(
  "products/update",
  async (data: ProductType, { rejectWithValue }) => {
    try {
      const { id, createdAt, ...updateData } = data;

      const response = await axios.patch(`${__API__}/${id}`, {
        ...updateData,
        packsNumber: Number(updateData.packsNumber)
      });

      return response.data;
    } catch (error) {
      console.log(error)
      const errorMessage = getErrorMessage(error, DEFAULT_ERROR)
      console.log(errorMessage)
      return rejectWithValue(errorMessage);
    }
  }
);

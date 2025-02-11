import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Удаление типа продукции
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string) => {
    await axios.delete(`${__API__}/${id}`);
    return id;
  }
);
import ProductsList from './ui/ProductsList/ProductsList'
import ProductEditable from './ui/ProductEditable/ProductEditable'
import productReducer from "./model/slices/productSlice";

import { createProduct } from "./model/services/createProduct";
import { deleteProduct } from "./model/services/deleteProduct";
import { fetchProducts } from "./model/services/fetchProducts";
import { updateProduct } from "./model/services/updateProduct";
import { fetchProductById } from "./model/services/fetchProductById";

export { 
  ProductsList,
  ProductEditable,
  productReducer,
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
  fetchProductById
};

import ProductsList from './ui/ProductsList/ProductsList'
import productReducer from "./model/slices/productSlice";

import { createProduct } from "./model/services/createProduct";
import { deleteProduct } from "./model/services/deleteProduct";
import { fetchProducts } from "./model/services/fetchProducts";
import { updateProduct } from "./model/services/updateProduct";

export { 
  ProductsList,
  productReducer,
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct
};

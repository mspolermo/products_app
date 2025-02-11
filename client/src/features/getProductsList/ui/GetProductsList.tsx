import { AppDispatch, RootState } from "@/app/providers/StoreProvider/config/store";
import { ProductsList } from "@/entities/product";
import { deleteProduct } from "@/entities/product/model/services/deleteProduct";
import { fetchProducts } from "@/entities/product/model/services/fetchProducts";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GetProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const navigate = useNavigate();

  const editHandler = (id: string) => navigate(`/edit/${id}`)
  const deleteHandler = (id: string) => dispatch(deleteProduct(id))

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Список продукции</h1>
      <button onClick={() => navigate("/create")}>Создать тип продукции</button>
      <ProductsList productsList={products} onEdit={editHandler} onDelete={deleteHandler}/>
    </div>
  );
};

export default GetProductsList;

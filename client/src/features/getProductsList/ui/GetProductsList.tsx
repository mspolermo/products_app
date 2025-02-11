import { AppDispatch, RootState } from "@/app/providers/StoreProvider/config/store";
import { ProductsList, deleteProduct, fetchProducts } from "@/entities/product";
import { Button } from "@/shared/ui/Button/Button";
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
      <Button variant='yellow' onClick={() => navigate("/create")}>Создать тип продукции</Button>
      <ProductsList productsList={products} onEdit={editHandler} onDelete={deleteHandler}/>
    </div>
  );
};

export default GetProductsList;

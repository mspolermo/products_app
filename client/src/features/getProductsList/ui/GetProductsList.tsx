import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "@/app/providers/StoreProvider/config/store";
import { ProductsList, deleteProduct, fetchProducts } from "@/entities/product";
import { getRouteCreate } from "@/shared/const/router";
import { Button } from "@/shared/ui/Button/Button";
import cls from './GetProductsList.module.css'

const GetProductsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const navigate = useNavigate();

  const editHandler = (id: string) => navigate(`/edit/${id}`);
  const deleteHandler = (id: string) => dispatch(deleteProduct(id));
  const createHandler = () =>navigate(getRouteCreate());

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={cls.wrapper}>
      <div className={cls.top}>
        <h1 className={cls.heading}>Список выпускаемой продукции</h1>
        <Button variant='yellow' onClick={createHandler}>Создать тип продукции</Button>
      </div>
      <ProductsList productsList={products} onEdit={editHandler} onDelete={deleteHandler}/>
    </div>
  );
};

export default GetProductsList;

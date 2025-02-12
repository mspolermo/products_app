import { ProductEditable, createProduct } from "@/entities/product";
import { ProductType } from "@/entities/product/model/types/types";
import { getRouteMain } from "@/shared/const/router";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>()

  const onSubmit = async (data: ProductType) => {
    setError(undefined)
    try {
      await dispatch(createProduct(data));
      navigate(getRouteMain());
    } catch (error) {
      setError("Ошибка создания продукта: " + (error as Error).message)
      console.error("Ошибка создания продукта:", error);
    }
  };

  const onReject = () => {
    navigate(getRouteMain());
  }
  
  return (
    <ProductEditable onSubmit={onSubmit} onReject={onReject} error={error}/>
  );
};

export default CreateProduct;

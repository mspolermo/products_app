import { AppDispatch, RootState } from "@/app/providers/StoreProvider/config/store";
import { ProductEditable, ProductsList, createProduct, deleteProduct, fetchProducts } from "@/entities/product";
import { ProductType } from "@/entities/product/model/types/types";
import { getRouteMain } from "@/shared/const/router";
import { Button } from "@/shared/ui/Button/Button";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    //dispatch(createProduct(data));
    navigate(getRouteMain());
  };

  const onReject = () => {
    navigate(getRouteMain());
  }
  
  return (
    <ProductEditable isCreateView onSubmit={onSubmit} onReject={onReject}/>
  );
};

export default CreateProduct;

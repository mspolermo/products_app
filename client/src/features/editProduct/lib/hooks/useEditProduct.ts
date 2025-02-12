import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProduct, deleteProduct, fetchProductById } from "@/entities/product";
import { ProductType } from "@/entities/product/model/types/types";
import { getRouteMain } from "@/shared/const/router";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

export const useEditProduct = (id: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Загрузка продукта
  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    dispatch(fetchProductById(id))
      .unwrap()
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Ошибка загрузки продукта: " + error);
        setIsLoading(false);
      });
  }, [dispatch, id]);

  // Обновление продукта
  const onSubmit = async (data: ProductType) => {
    setError(undefined);

    if (!data.id) {
      setError("Ошибка: отсутствует ID продукта.");
      return;
    }

    try {
      await dispatch(updateProduct(data)).unwrap();
      navigate(getRouteMain());
    } catch (error) {
      setError("Ошибка обновления продукта: " + error);
    }
  };

  // Удаление продукта
  const onDelete = async () => {
    try {
      await dispatch(deleteProduct(id)).unwrap();
      navigate(getRouteMain());
    } catch (error) {
      setError("Ошибка удаления продукта: " + error);
    }
  };

  // Отмена  
  const onReject = () => {
    navigate(getRouteMain());
  };

  return {
    product,
    isLoading,
    error,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    onSubmit,
    onDelete,
    onReject
  };
};

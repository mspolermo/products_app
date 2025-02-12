import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductEditable, updateProduct, deleteProduct, fetchProductById } from "@/entities/product";
import { ProductType } from "@/entities/product/model/types/types";
import { getRouteMain } from "@/shared/const/router";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { PageLoader } from "@/widgets/PageLoader";

interface Props {
  id: string;
}

const EditProduct = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

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
        setError("Ошибка загрузки продукта: " + (error as Error).message);
        setIsLoading(false);
      });
  }, [dispatch, id]);

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

  const onDelete = async () => {
    try {
      await dispatch(deleteProduct(id)).unwrap();
      navigate(getRouteMain());
    } catch (error) {
      setError("Ошибка обновления продукта: " + error);
    }
  };

  const onReject = () => {
    navigate(getRouteMain());
  };

  if (isLoading) return <PageLoader />

  return (
    <div>
      {isLoading && <p>Загрузка...</p>}
      {!isLoading && product && (
        <ProductEditable product={product} onSubmit={onSubmit} onReject={onReject} onDelete={onDelete} error={error}/>
      )}
    </div>
  );
};

export default EditProduct;

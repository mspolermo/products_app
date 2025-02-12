import { ProductEditable } from "@/entities/product";
import { PageLoader } from "@/widgets/PageLoader";
import { RemoveModal } from "@/shared/ui/RemoveModal";
import { useEditProduct } from "../lib/hooks/useEditProduct";

interface Props {
  id: string;
}

const EditProduct = ({ id }: Props) => {
  const {
    product,
    isLoading,
    error,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    onSubmit,
    onDelete,
    onReject
  } = useEditProduct(id);

  if (isLoading) return <PageLoader />;

  return (
    <>
      {product && (
        <ProductEditable
          product={product}
          onSubmit={onSubmit}
          onReject={onReject}
          onDelete={() => setIsDeleteModalOpen(true)}
          error={error}
        />
      )}
      <RemoveModal isOpen={isDeleteModalOpen} onDelete={onDelete} onCloseModal={() => setIsDeleteModalOpen(false)} />
    </>
  );
};

export default EditProduct;

import { CreateProduct } from '@/features/createProduct';
import { EditLayout } from '@/shared/layouts/EditLayout/EditLayout';
import { memo } from 'react';

const CreatePage = memo(() => {
  return (
    <EditLayout title='Создание типа продукции'>
      <CreateProduct />
    </EditLayout>
  );
});

export default CreatePage;

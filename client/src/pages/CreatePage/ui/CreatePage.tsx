import { CreateProduct } from '@/features/createProduct';
import { EditLayout } from '@/shared/layouts/EditLayout/EditLayout';
import { memo } from 'react';

const CreatePage = memo(() => {
  return (
    <EditLayout>
      <CreateProduct />
    </EditLayout>
  );
});

export default CreatePage;

import { EditProduct } from '@/features/editProduct';
import { EditLayout } from '@/shared/layouts/EditLayout/EditLayout';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  if (id === undefined)   return (
    <EditLayout title='Редактирование типа продукции'>
      <h2>ID продукта не обнаружен</h2>
    </EditLayout>
  );

  return (
    <EditLayout title='Редактирование типа продукции'>
      <EditProduct id={id}/>
    </EditLayout>
  );
});

export default EditPage;

import { EditLayout } from '@/shared/layouts/EditLayout/EditLayout';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <EditLayout title='Редактирование типа продукции'>
      <h2>Редактирование { id }</h2>
    </EditLayout>
  );
});

export default EditPage;

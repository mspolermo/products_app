import { memo } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <h2>Редактирование { id }</h2>
    </section>
  );
});

export default EditPage;

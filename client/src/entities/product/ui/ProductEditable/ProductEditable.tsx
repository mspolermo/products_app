import { Button } from "@/shared/ui/Button/Button";
import { ProductType } from "../../model/types/types";
import cls from './ProductEditable.module.css'
import { useForm } from "react-hook-form";

interface Props {
  isCreateView?: boolean
  product?: ProductType
  onSubmit: () => void
  onReject: () => void
  onDelete?: () => void
}

const ProductEditable = (props: Props) => {
  const { product, isCreateView, onSubmit, onReject, onDelete } = props;
  const { register, handleSubmit } = useForm();

  const heading = isCreateView ? 'Создание типа продукции' : 'Редактирование типа продукции';
  const submitBtnHead = isCreateView ? 'Создать' : 'Сохранить';

  const submitHandler = () => handleSubmit(onSubmit);
  const rejectHandler = () => onReject();
  const deleteHandler = () => onDelete && onDelete();

  return (
    <div>
      <h1 className={cls.heading}>{heading}</h1>

      <form onSubmit={submitHandler}>
        <input type="number" placeholder="Кол-во пачек" {...register("packsNumber")} required />
        <input placeholder="Тип упаковки" value={product?.packageType ?? ''}  required />
        <p>АРХИВИРОВАНО - ЧЕКБОКС</p>
        <textarea value={product?.description ?? ''}  placeholder="Описание" />

        {!isCreateView && Boolean(deleteHandler) && <Button type="button" variant="red" onClick={deleteHandler}>Удалить</Button>}
        <Button type="button" variant="black" onClick={rejectHandler}>Отмена</Button>
        <Button type="submit" variant="yellow">{submitBtnHead}</Button>
      </form>

    </div>
  );
};

export default ProductEditable;

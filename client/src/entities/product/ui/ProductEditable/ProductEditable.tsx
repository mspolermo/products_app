import { Button } from "@/shared/ui/Button/Button";
import { ProductType } from "../../model/types/types";
import cls from './ProductEditable.module.css'
import { useForm } from "react-hook-form";
import { Input } from "@/shared/ui/Input/Input";
import { Select } from "@/shared/ui/Select/Select";
import { TextArea } from "@/shared/ui/TextArea/TextArea";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";

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

  const submitBtnHead = isCreateView ? 'Создать' : 'Сохранить';

  const submitHandler = () => handleSubmit(onSubmit);
  const rejectHandler = () => onReject();
  const deleteHandler = () => onDelete && onDelete();

  return (
    <form onSubmit={submitHandler}>

      <div className={cls.inputsBlock}>
        <Input
          label="Кол-во пачек"
          placeholder="Кол-во пачек"
          value={product?.packsNumber ?? ''}
          required
        />

        <Select 
          label="Тип упаковки"
          value={product?.packageType ?? 'компрессия'}
          options={[
            { value: 'компрессия', label: 'компрессия' },
            { value: 'некомпрессия', label: 'некомпрессия' },
          ]}
          onChangeValue={(value) => console.log('Выбрано:', value)}
          required
        />

        <Checkbox label="Архивировано" checked={true}/>

        <TextArea
          value={product?.description ?? ''} 
          placeholder="Описание"
          label="Описание"
        />
      </div>

      <div className={cls.btnsBlock}>
        {!isCreateView && Boolean(deleteHandler) && <Button type="button" variant="red" onClick={deleteHandler}>Удалить</Button>}
        <Button type="button" variant="black" onClick={rejectHandler}>Отмена</Button>
        <Button type="submit" variant="yellow">{submitBtnHead}</Button>
      </div>
    </form>
  );
};

export default ProductEditable;

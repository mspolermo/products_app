import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { Select } from "@/shared/ui/Select/Select";
import { TextArea } from "@/shared/ui/TextArea/TextArea";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { ProductType } from "../../model/types/types";
import cls from "./ProductEditable.module.css";

interface Props {
  product?: ProductType;
  error?: string;
  onSubmit: (data: ProductType) => void;
  onReject: () => void;
  onDelete?: () => void;
}

const ProductEditable = (props: Props) => {
  const { product, error, onSubmit, onReject, onDelete } = props;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductType>({
    defaultValues: {
      id: product?.id ?? "",
      packsNumber: product?.packsNumber,
      packageType: product?.packageType ?? "",
      isArchived: product?.isArchived ?? false,
      description: product?.description ?? "",
    },
  });

  useEffect(() => {
    if (product) {
      setValue("id", product.id);
      setValue("packsNumber", product.packsNumber);
      setValue("packageType", product.packageType);
      setValue("isArchived", product.isArchived);
      setValue("description", product.description);
    }
  }, [product, setValue]);

  const submitBtnText = Boolean(onDelete) ? "Сохранить" : "Создать";
  const errorMessage = error ?? errors?.packsNumber?.message ?? errors.packageType?.message ?? ''

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.inputsBlock}>
        <Input
          label="Кол-во пачек"
          placeholder="Кол-во пачек"
          type="number"
          required
          {...register("packsNumber", {
            required: `Поле "Кол-во пачек" обязательно`,
            min: { value: 1, message: "Минимальное значение кол-ва пачек 1" }
          })}
          error={errors.packsNumber?.message}
        />

        <Select
          label="Тип упаковки"
          required
          options={[
            { value: "компрессия", label: "компрессия" },
            { value: "некомпрессия", label: "некомпрессия" },
          ]}
          {...register("packageType", { required: "Выберите тип упаковки" })}
          error={errors.packageType?.message}
        />

        <Checkbox
          label="Архивировано"
          checked={watch("isArchived")}
          onChange={(checked) => setValue("isArchived", checked)}
        />

        <TextArea
          label="Описание"
          placeholder="Описание"
          value={watch("description")}
          onChange={(value) => setValue("description", value)}
        />
      </div>

      <p className={cls.errorField}>{errorMessage}</p>

      <div className={cls.btnsBlock}>
        {onDelete && (
          <Button type="button" variant="red" onClick={onDelete}>
            Удалить
          </Button>
        )}
        <Button type="button" variant="black" onClick={onReject}>
          Отмена
        </Button>
        <Button type="submit" variant="yellow">
          {submitBtnText}
        </Button>
      </div>
    </form>
  );
};

export default ProductEditable;

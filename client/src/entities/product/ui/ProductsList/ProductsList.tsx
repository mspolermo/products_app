import TrashIcon from "@/shared/assets/icons/TrashIcon";
import EditIcon from "@/shared/assets/icons/EditIcon";
import { ProductType } from "../../model/types/types";
import cls from "./ProductsList.module.css";

interface Props {
  productsList: ProductType[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ProductsList = ({ productsList, onEdit, onDelete }: Props) => {
  if (!productsList || productsList.length === 0) {
    return <p className={cls.emptyMessage}>Созданная продукция отсутствует</p>;
  }

  return (
    <div className={cls.tableWrapper}>
      <div className={cls.tableContainer}>
        <table className={cls.table}>
          <thead>
            <tr>
              <th className={cls.numCell}>№</th>
              <th>Кол-во пачек</th>
              <th>Тип упаковки</th>
              <th>Дата создания</th>
              <th>Статус</th>
              <th className={cls.iconColumn}></th>
              <th className={cls.iconColumn}></th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, index) => (
              <tr key={product.id}>
                <td className={cls.numCell}>{index + 1}</td>
                <td>{product.packsNumber}</td>
                <td>{product.packageType}</td>
                <td>{new Date(product.createdAt).toLocaleDateString("ru-RU")}</td>
                <td className={product.isArchived ? cls.archived : cls.active}>
                  {product.isArchived ? "Архив" : "Активно"}
                </td>
                <td>
                  <p className={cls.questionMark} title={product.description || "Нет описания"}>?</p>
                </td>
                <td >
                  <div className={cls.iconCell}>
                    <button className={cls.iconButton} onClick={() => onEdit(product.id)} title="Редактировать">
                      <EditIcon width={18} height={18} color="var(--contrast-600)" />
                    </button>
                    <button className={cls.iconButton} onClick={() => onDelete(product.id)} title="Удалить">
                      <TrashIcon width={18} height={18} color="var(--contrast-600)" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;

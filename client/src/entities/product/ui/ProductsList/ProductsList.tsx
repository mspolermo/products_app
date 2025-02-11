import { ProductType } from "../../model/types/types";
import cls from './ProductsList.module.css'

interface Props {
  productsList: ProductType[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const ProductsList = (props: Props) => {
  const { productsList, onEdit, onDelete } = props;

  if (productsList && productsList.length === 0 ) return (
    <p>Созданная продукция отстутствует</p>
  )

  return (
    <table className={cls.table}>
      <thead>
        <tr>
          <th>№</th>
          <th>Кол-во пачек</th>
          <th>Тип упаковки</th>
          <th>Дата создания</th>
          <th>Статус</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productsList.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.packsNumber}</td>
            <td>{product.packageType}</td>
            <td>{product.createdAt}</td>
            <td>{product.isArchived ? "Архив" : "Активно"}</td>
            <td>?</td>
            <td>
              <button onClick={() => onEdit(product.id)}>✏️</button>
              <button onClick={() => onDelete(product.id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsList;

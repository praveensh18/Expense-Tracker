import s from "./style.module.css";

export function ListItem({ expenseItem }) {
  return (
    <tr>
      <th>{expenseItem.name}</th>
      <td className={s.price}>{expenseItem.price}</td>
    </tr>
  );
}

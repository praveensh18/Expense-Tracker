import { ListItem } from "../ListItem/ListItem";
import s from './style.module.css'

export function List({ items }) {
  return (
    <div className={s.expense_list}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, index) => <ListItem key={item+index} expenseItem={item}/>)}
        </tbody>
      </table>
    </div>
  );
}

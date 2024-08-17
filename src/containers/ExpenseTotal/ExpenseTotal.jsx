import { useSelector } from 'react-redux';
import s from './style.module.css';

export default function ExpenseTotal(props) {
  const ExpenseList = useSelector((state) => state.EXPENSE.expenseList);
  const income = useSelector((state) => state.EXPENSE.income)

  const totalExpense = ExpenseList.reduce((acc, currentItem) => {
    return acc + Number.parseFloat(currentItem.price);
  }, 0);

  const remainingMoney = income - totalExpense

  return (
    <>
      <div className='row'>
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className='row'>
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </>
  );
}

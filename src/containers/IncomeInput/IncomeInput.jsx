import s from './style.module.css';
import { setIncomeAction } from 'store/expense/expense-slice';
import { useSelector, useDispatch } from 'react-redux';

export default function IncomeInput(props) {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.EXPENSE.income)

  const setIncome = (e) => {
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)))
  };

  return (
    <div className='row justify-content-center mb-2'>
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className='col-6'>
        <input
          type='number'
          className='form-control'
          placeholder='Ex: 3000'
          onChange={setIncome}
          defaultValue={income}
        />
      </div>
    </div>
  );
}

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import s from './style.module.css';
import { addExpenseAction } from 'store/expense/expense-slice';

export function ExpenseInput(props) {
  const [expensePrice, setPrice] = useState();
  const [expenseName, setExpenseName] = useState();

  const dispatch = useDispatch();

  const submitExpense = (e) => {
    e.preventDefault();
    dispatch(addExpenseAction({name: expenseName, price: expensePrice}));
  };

  return (
    <form onSubmit={submitExpense}>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-5 col-md-4 col-lg-4 mb-2'>
          <input
            type='text'
            className='form-control'
            placeholder='Ex : "Apple"'
            name='name'
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div className='col-12 col-sm-2 col-md-4 col-lg-4 mb-2'>
          <input
            type='number'
            step='0.01'
            className='form-control'
            placeholder='Ex: 3.99'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className='col-12 col-sm-2 col-md-4 col-lg-4 mb-2'>
          <button type='submit' className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

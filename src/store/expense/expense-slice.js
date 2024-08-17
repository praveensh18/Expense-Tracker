import { createSlice } from '@reduxjs/toolkit';

export const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState: {
    expenseList: [],
    income: 1000
  },
  reducers: {
    addExpenseAction: (state, action) => {
			state.expenseList.push(action.payload)
		},
    setIncomeAction: (state, action) => {
      state.income = action.payload
    }
  },
});

export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

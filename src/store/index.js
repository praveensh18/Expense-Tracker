import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expense-slice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const allReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
	whitelist: []
};

const persistReducers = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { reducer as authorsReducer } from './authors';
import { reducer as publishersReducer } from './publishers';
import { reducer as booksReducer } from './books';
import { reducer as modalReducer } from './modal';

const store = configureStore({
	reducer: {
		authors: authorsReducer,
		publishers: publishersReducer,
		books: booksReducer,
		modal: modalReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

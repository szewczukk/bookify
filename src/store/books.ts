import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';
import { Book } from '../utils/types';

export const fetchBooks = createAsyncThunk<Book[]>(
	'books/fetchAll',
	async () => {
		const response = await api.get('books/');
		return Object.values(response.data);
	},
);

export const createBook = createAsyncThunk<Book, Omit<Book, 'id'>>(
	'books/create',
	async (book) => {
		const response = await api.post('books/', book);
		return response.data;
	},
);

type BooksState = Book[];
const initialState: BooksState = [];

const slice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(createBook.fulfilled, (state, action) => {
			state.push(action.payload);
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

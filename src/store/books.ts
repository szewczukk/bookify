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

type BooksState = Book[];
const initialState: BooksState = [];

const slice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			action.payload.forEach((book) => {
				state.push(book);
			});
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

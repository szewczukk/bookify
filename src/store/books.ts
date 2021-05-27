import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export const editBook = createAsyncThunk<Book, Book>(
	'authors/edit',
	async (book) => {
		const response = await api.put(`books/${book.id}`, book);
		return response.data;
	},
);

export const deleteBook = createAsyncThunk<Book, number>(
	'authors/delete',
	async (bookId) => {
		const response = await api.delete(`books/${bookId}`);
		return response.data;
	},
);

interface BooksState {
	entities: Book[];
	status: 'none' | 'success' | 'error';
}
const initialState: BooksState = {
	entities: [],
	status: 'none',
};

const slice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<BooksState['status']>) => {
			state.status = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			state.entities = action.payload;
		});
		builder.addCase(createBook.fulfilled, (state, action) => {
			state.entities.push(action.payload);
		});
		builder.addCase(deleteBook.fulfilled, (state, action) => {
			state.entities = state.entities.filter(
				(book) => book.id !== action.payload.id,
			);
		});
		builder.addCase(editBook.fulfilled, (state, action) => {
			state.entities = [
				...state.entities.filter((book) => book.id !== action.payload.id),
				action.payload,
			];
			state.status = 'success';
		});
		builder.addCase(editBook.rejected, (state) => {
			state.status = 'error';
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

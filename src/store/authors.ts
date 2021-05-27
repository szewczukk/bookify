import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';
import { Author } from '../utils/types';

export const fetchAuthors = createAsyncThunk<Author[]>(
	'authors/fetchAll',
	async () => {
		const response = await api.get('authors/');
		return Object.values(response.data);
	},
);

export const createAuthor = createAsyncThunk<Author, Omit<Author, 'id'>>(
	'authors/create',
	async (author) => {
		const response = await api.post('authors/', author);
		return response.data;
	},
);

export const editAuthor = createAsyncThunk<Author, Author>(
	'authors/edit',
	async (author) => {
		const response = await api.put(`authors/${author.id}`, author);
		return response.data;
	},
);

export const deleteAuthor = createAsyncThunk<Author, number>(
	'authors/delete',
	async (authorId) => {
		const response = await api.delete(`authors/${authorId}`);
		return response.data;
	},
);

interface AuthorsState {
	entities: Author[];
	status: 'none' | 'success' | 'error' | 'pending';
}
const initialState: AuthorsState = {
	entities: [],
	status: 'none',
};

const slice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			state.entities = action.payload;
		});
		builder.addCase(createAuthor.fulfilled, (state, action) => {
			state.entities.push(action.payload);
		});
		builder.addCase(deleteAuthor.fulfilled, (state, action) => {
			state.entities = state.entities.filter(
				(author) => author.id !== action.payload.id,
			);
		});
		builder.addCase(editAuthor.fulfilled, (state, action) => {
			state.entities = [
				...state.entities.filter((author) => author.id !== action.payload.id),
				action.payload,
			];
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

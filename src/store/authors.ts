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

type AuthorsState = Author[];
const initialState: AuthorsState = [];

const slice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			const authors = action.payload.sort((a, b) =>
				a.lastName.localeCompare(b.lastName),
			);

			authors.forEach((author) => {
				state.push(author);
			});
		});
		builder.addCase(createAuthor.fulfilled, (state, action) => {
			state.push(action.payload);
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

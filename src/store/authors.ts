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

type AuthorsState = Author[];
const initialState: AuthorsState = [];

const slice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			action.payload.forEach((author) => {
				state.push(author);
			});
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

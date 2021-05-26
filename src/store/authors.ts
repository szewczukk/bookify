import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const fetchAuthors = createAsyncThunk<Author[]>(
	'authors/fetchAll',
	async () => {
		const response = await api.get('authors/');
		return Object.values(response.data);
	},
);

interface Author {
	id: number;
	firstName: string;
	lastName: string;
}
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

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
interface AuthorsState {
	authors: Author[];
}
const initialState: AuthorsState = { authors: [] };

const slice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			action.payload.forEach((author) => {
				state.authors.push(author);
			});
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

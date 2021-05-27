import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';
import { Publisher } from '../utils/types';

export const fetchPublishers = createAsyncThunk<Publisher[]>(
	'publisher/fetchAll',
	async () => {
		const response = await api.get('publishers/');
		return Object.values(response.data);
	},
);

export const createPublisher = createAsyncThunk<
	Publisher,
	Omit<Publisher, 'id'>
>('publisher/create', async (publisher) => {
	const response = await api.post('publishers/', publisher);
	return response.data;
});

export const deletePublisher = createAsyncThunk<Publisher, number>(
	'publisher/delete',
	async (publisherId) => {
		const response = await api.delete(`publishers/${publisherId}`);
		return response.data;
	},
);

type PublishersState = Publisher[];
const initialState: PublishersState = [];

const slice = createSlice({
	name: 'publishers',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPublishers.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(createPublisher.fulfilled, (state, action) => {
			state.push(action.payload);
		});
		builder.addCase(deletePublisher.fulfilled, (state, action) => {
			return state.filter((publisher) => publisher.id !== action.payload.id);
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

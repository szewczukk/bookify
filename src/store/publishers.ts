import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export const editPublisher = createAsyncThunk<Publisher, Publisher>(
	'authors/edit',
	async (publisher) => {
		const response = await api.put(`publishers/${publisher.id}`, publisher);
		return response.data;
	},
);

export const deletePublisher = createAsyncThunk<Publisher, number>(
	'publisher/delete',
	async (publisherId) => {
		const response = await api.delete(`publishers/${publisherId}`);
		return response.data;
	},
);

interface PublishersState {
	entities: Publisher[];
	status: 'none' | 'success' | 'error';
}
const initialState: PublishersState = { entities: [], status: 'none' };

const slice = createSlice({
	name: 'publishers',
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<PublishersState['status']>) => {
			state.status = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPublishers.fulfilled, (state, action) => {
			state.entities = action.payload;
		});
		builder.addCase(createPublisher.fulfilled, (state, action) => {
			state.entities.push(action.payload);
		});
		builder.addCase(deletePublisher.fulfilled, (state, action) => {
			state.entities = state.entities.filter(
				(publisher) => publisher.id !== action.payload.id,
			);
		});
		builder.addCase(editPublisher.fulfilled, (state, action) => {
			state.entities = [
				...state.entities.filter(
					(publisher) => publisher.id !== action.payload.id,
				),
				action.payload,
			];
			state.status = 'success';
		});
		builder.addCase(editPublisher.rejected, (state) => {
			state.status = 'error';
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api';

export const fetchPublishers = createAsyncThunk<Publisher[]>(
	'publisher/fetchAll',
	async () => {
		const response = await api.get('publishers/');
		return Object.values(response.data);
	},
);

interface Publisher {
	id: number;
	name: string;
	establishmentYear: number;
}
type PublishersState = Publisher[];
const initialState: PublishersState = [];

const slice = createSlice({
	name: 'publishers',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPublishers.fulfilled, (state, action) => {
			action.payload.forEach((publisher) => {
				state.push(publisher);
			});
		});
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

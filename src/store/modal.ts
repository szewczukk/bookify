import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
	visible: boolean;
	text: string;
};
const initialState: ModalState = { visible: false, text: '' };

const slice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.visible = !state.visible;
		},
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

export const reducer = slice.reducer;
export const actions = slice.actions;

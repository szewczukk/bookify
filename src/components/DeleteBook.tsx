import React from 'react';
import { useAppDispatch } from '../store';
import { deleteBook } from '../store/books';
import { actions } from '../store/modal';
import ConfirmationButton from './ConfirmationButton';

interface Props {
	id: number;
}

const DeleteBook = ({ id }: Props) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(actions.setText('Sukces'));
		dispatch(actions.toggleModal());
		dispatch(deleteBook(id));
	};

	return (
		<ConfirmationButton
			afterConfirmation={onClick}
			text="Usuń"
			cypressId="delete"
		/>
	);
};

export default DeleteBook;

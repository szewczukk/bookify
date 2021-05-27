import React from 'react';
import { useAppDispatch } from '../store';
import { deleteAuthor } from '../store/authors';
import { actions } from '../store/modal';
import ConfirmationButton from './ConfirmationButton';

interface Props {
	id: number;
}

const DeleteAuthor = ({ id }: Props) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(actions.setText('Sukces'));
		dispatch(actions.toggleModal());
		dispatch(deleteAuthor(id));
	};

	return (
		<ConfirmationButton
			afterConfirmation={onClick}
			text="Usuń"
			cypressId="delete"
		/>
	);
};

export default DeleteAuthor;

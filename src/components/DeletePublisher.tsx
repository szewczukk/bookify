import React from 'react';
import { useAppDispatch } from '../store';
import { actions } from '../store/modal';
import { deletePublisher } from '../store/publishers';
import ConfirmationButton from './ConfirmationButton';

interface Props {
	id: number;
}

const DeleteAuthor = ({ id }: Props) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(actions.setText('Sukces'));
		dispatch(actions.toggleModal());
		dispatch(deletePublisher(id));
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

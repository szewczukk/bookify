import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { deleteAuthor } from '../store/authors';
import { actions } from '../store/modal';

interface Props {
	id: number;
}

const DeleteAuthor = ({ id }: Props) => {
	const [needsConfirmation, setConfirmation] = useState(false);
	const dispatch = useAppDispatch();

	const onClick = () => {
		if (needsConfirmation) {
			dispatch(actions.setText('Sukces'));
			dispatch(actions.toggleModal());
			dispatch(deleteAuthor(id));
		} else {
			setConfirmation((prev) => !prev);
		}
	};

	return (
		<button onClick={onClick} data-cy="delete">
			{needsConfirmation ? 'Czy na pewno?' : 'Usuń'}
		</button>
	);
};

export default DeleteAuthor;

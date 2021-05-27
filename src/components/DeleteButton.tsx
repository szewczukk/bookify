import React from 'react';
import { useAppDispatch } from '../store';
import { actions } from '../store/modal';
import ConfirmationButton from './ConfirmationButton';

interface Props {
	onClick: () => void;
}

const DeleteButton = (props: Props) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		props.onClick();
		// I know there was no need for putting the modal here, just wanted to be sure the deletion happened
		dispatch(actions.setText('Sukces'));
		dispatch(actions.toggleModal());
	};

	return (
		<ConfirmationButton
			afterConfirmation={onClick}
			text="Usuń"
			cypressId="delete"
		/>
	);
};

export default DeleteButton;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublishersTable from '../components/PublishersTable';
import { useAppDispatch, useAppSelector } from '../store';
import { actions as modalActions } from '../store/modal';
import { actions as publishersActions } from '../store/publishers';

const AllPublishersPage = () => {
	const { status } = useAppSelector((state) => state.publishers);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (['success', 'error'].includes(status)) {
			dispatch(modalActions.setText(status === 'success' ? 'Sukces' : 'Błąd'));
			dispatch(modalActions.toggleModal());
			dispatch(publishersActions.setStatus('none'));
		}
	}, [status]);

	return (
		<main>
			<Link to="/create-publisher" data-cy="link-create-publisher">
				Dodaj
			</Link>
			<PublishersTable />
		</main>
	);
};

export default AllPublishersPage;

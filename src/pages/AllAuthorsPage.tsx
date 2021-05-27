import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthorsTable from '../components/AuthorsTable';
import { useAppDispatch, useAppSelector } from '../store';
import { actions as modalActions } from '../store/modal';
import { actions as authorsActions } from '../store/authors';

const AllAuthorsPage = () => {
	const { status } = useAppSelector((state) => state.authors);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (['success', 'error'].includes(status)) {
			dispatch(modalActions.setText(status === 'success' ? 'Sukces' : 'Błąd'));
			dispatch(modalActions.toggleModal());
			dispatch(authorsActions.setStatus('none'));
		}
	}, [status]);

	return (
		<main>
			<Link to="/create-author" data-cy="link-create-author">
				Dodaj
			</Link>
			<AuthorsTable />
		</main>
	);
};

export default AllAuthorsPage;

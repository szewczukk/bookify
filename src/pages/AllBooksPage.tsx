import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BooksTable from '../components/BooksTable';
import { actions as modalActions } from '../store/modal';
import { actions as booksActions } from '../store/books';
import { useAppDispatch, useAppSelector } from '../store';

const AllBooksPage = () => {
	const { status } = useAppSelector((state) => state.authors);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (['success', 'error'].includes(status)) {
			dispatch(modalActions.setText(status === 'success' ? 'Sukces' : 'Błąd'));
			dispatch(modalActions.toggleModal());
			dispatch(booksActions.setStatus('none'));
		}
	}, [status]);

	return (
		<main>
			<Link to="/create-book" data-cy="link-create-book">
				Dodaj
			</Link>
			<BooksTable />
		</main>
	);
};

export default AllBooksPage;

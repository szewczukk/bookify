import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { actions as authorsActions, deleteAuthor } from '../store/authors';
import { actions } from '../store/modal';

import DeleteButton from './DeleteButton';
import TableCell from './TableCell';

const AllAuthorsPage = () => {
	const dispatch = useAppDispatch();
	const { status, entities } = useAppSelector((state) => state.authors);
	const authors = entities
		.slice()
		.sort((a, b) => a.lastName.localeCompare(b.lastName));

	useEffect(() => {
		if (['success', 'error'].includes(status)) {
			dispatch(actions.setText(status === 'success' ? 'Sukces' : 'Błąd'));
			dispatch(actions.toggleModal());
			dispatch(authorsActions.setStatus('none'));
		}
	}, [status]);

	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Imię</th>
					<th>Nazwisko</th>
					<th>Akcje</th>
				</tr>
			</thead>
			<tbody>
				{authors.map((author) => (
					<tr key={author.id} data-cy="author-row">
						<TableCell>{author.id}</TableCell>
						<TableCell>{author.firstName}</TableCell>
						<TableCell>{author.lastName}</TableCell>
						<TableCell>
							<Link to={`/edit-author/${author.id}`} data-cy="edit">
								Edytuj
							</Link>
							<DeleteButton onClick={() => dispatch(deleteAuthor(author.id))} />
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllAuthorsPage;

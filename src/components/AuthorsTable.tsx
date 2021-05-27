import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { deleteAuthor } from '../store/authors';

import DeleteButton from './DeleteButton';
import TableCell from './TableCell';

const AllAuthorsPage = () => {
	const dispatch = useAppDispatch();
	const authors = useAppSelector((state) => state.authors.entities)
		.slice()
		.sort((a, b) => a.lastName.localeCompare(b.lastName));

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

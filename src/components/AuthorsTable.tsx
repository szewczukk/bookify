import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';

import DeleteAuthor from './DeleteAuthor';
import TableCell from './TableCell';

const AllAuthorsPage = () => {
	const authors = useAppSelector((state) => state.authors)
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
							<DeleteAuthor id={author.id} />
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllAuthorsPage;

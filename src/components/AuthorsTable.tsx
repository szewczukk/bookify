import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';

import DeleteAuthor from './DeleteAuthor';

const AllAuthorsPage = () => {
	const authors = useAppSelector((state) => state.authors);

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
				{authors?.map((author) => (
					<tr key={author.id} data-cy={`author-row`}>
						<td>{author.id}</td>
						<td>{author.firstName}</td>
						<td>{author.lastName}</td>
						<td>
							<Link to={`/edit-author/${author.id}`} data-cy="edit">
								Edytuj
							</Link>
							<DeleteAuthor id={author.id} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllAuthorsPage;

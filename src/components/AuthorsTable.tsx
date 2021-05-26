import React from 'react';
import { useAppSelector } from '../store';

import DeleteAuthor from './DeleteAuthor';

const AllAuthorsPage = () => {
	const authors = useAppSelector((state) => state.authors);

	return (
		<table>
			{authors?.map((author) => (
				<tr key={author.id} data-cy={`author-${author.lastName}`}>
					<td>{author.id}</td>
					<td> {author.firstName}</td> <td> {author.lastName}</td>
					<td>
						<button>Edytuj</button>
						<DeleteAuthor id={author.id} />
					</td>
				</tr>
			))}
		</table>
	);
};

export default AllAuthorsPage;

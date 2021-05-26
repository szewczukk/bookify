import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { deleteAuthor } from '../store/authors';

const AllAuthorsPage = () => {
	const authors = useAppSelector((state) => state.authors);
	const dispatch = useDispatch();

	return (
		<table>
			{authors?.map((author) => (
				<tr key={author.id} data-cy={`author-${author.lastName}`}>
					<td>{author.id}</td>
					<td> {author.firstName}</td> <td> {author.lastName}</td>
					<td>
						<button>Edytuj</button>
						<button
							onClick={() => dispatch(deleteAuthor(author.id))}
							data-cy="delete"
						>
							Usuń
						</button>
					</td>
				</tr>
			))}
		</table>
	);
};

export default AllAuthorsPage;

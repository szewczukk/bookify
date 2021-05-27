import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';
import { Book } from '../utils/types';
import DeletePublisher from './DeletePublisher';

const BooksRow = ({
	id,
	title,
	isbn,
	publisherId,
	publishmentYear,
	authorId,
}: Book) => {
	const publisher = useAppSelector((state) => state.publishers)
		.slice()
		.find((publisher) => publisher.id === publisherId);

	const author = useAppSelector((state) => state.authors)
		.slice()
		.find((author) => author.id === authorId);

	return (
		<tr key={id} data-cy="book-row">
			<td>{id}</td>
			<td>{title}</td>
			<td>{isbn}</td>
			<td>{publishmentYear}</td>
			<td>{publisher?.name ?? 'Wydawca nie znaleziony'}</td>
			<td>
				{author
					? `${author.firstName} ${author.lastName}`
					: 'Autor nie znaleziony'}
			</td>
			<td>
				<Link to={`/edit-book/${id}`} data-cy="edit">
					Edytuj
				</Link>
				<DeletePublisher id={id} />
			</td>
		</tr>
	);
};

export default BooksRow;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';
import { Book } from '../utils/types';
import DeletePublisher from './DeletePublisher';
import TableCell from './TableCell';

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
			<TableCell>{id}</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell>{isbn}</TableCell>
			<TableCell>{publishmentYear}</TableCell>
			<TableCell>{publisher?.name ?? 'Wydawca nie znaleziony'}</TableCell>
			<TableCell>
				{author
					? `${author.firstName} ${author.lastName}`
					: 'Autor nie znaleziony'}
			</TableCell>
			<TableCell>
				<Link to={`/edit-book/${id}`} data-cy="edit">
					Edytuj
				</Link>
				<DeletePublisher id={id} />
			</TableCell>
		</tr>
	);
};

export default BooksRow;

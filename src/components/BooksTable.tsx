import React from 'react';
import { useAppSelector } from '../store';
import BooksRow from './BooksRow';

const BooksTable = () => {
	const { entities } = useAppSelector((state) => state.books);

	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Tytuł</th>
					<th>ISBN</th>
					<th>Rok wydania</th>
					<th>Wydawca</th>
					<th>Autor</th>
					<th>Akcje</th>
				</tr>
			</thead>
			<tbody>
				{entities.map((book) => (
					<BooksRow {...book} key={book.id} />
				))}
			</tbody>
		</table>
	);
};

export default BooksTable;

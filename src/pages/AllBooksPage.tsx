import React from 'react';
import { Link } from 'react-router-dom';
import BooksTable from '../components/BooksTable';

const AllBooksPage = () => (
	<main>
		<Link to="/create-book" data-cy="link-create-book">
			Dodaj
		</Link>
		<BooksTable />
	</main>
);

export default AllBooksPage;

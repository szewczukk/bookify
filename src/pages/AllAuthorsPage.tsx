import React from 'react';
import { Link } from 'react-router-dom';
import AuthorsTable from '../components/AuthorsTable';

const AllAuthorsPage = () => (
	<main>
		<Link to="/create-author" data-cy="link-create-author">
			Dodaj
		</Link>
		<AuthorsTable />
	</main>
);

export default AllAuthorsPage;

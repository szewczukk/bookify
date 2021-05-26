import React from 'react';
import { Link } from 'react-router-dom';
import AuthorsTable from '../components/AuthorsTable';

const AllAuthorsPage = () => {
	return (
		(
			<div>
				<Link to="/create-author">Dodaj</Link>
				<AuthorsTable />
			</div>
		) ?? <p>Loading..</p>
	);
};

export default AllAuthorsPage;

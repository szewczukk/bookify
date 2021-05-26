import React from 'react';
import AuthorsTable from '../components/AuthorsTable';

const AllAuthorsPage = () => {
	return (
		(
			<div>
				<button>Dodaj</button>
				<AuthorsTable />
			</div>
		) ?? <p>Loading..</p>
	);
};

export default AllAuthorsPage;

import React from 'react';
import { Link } from 'react-router-dom';

import PublishersTable from '../components/PublishersTable';

const AllPublishersPage = () => (
	<main>
		<Link to="/create-publisher" data-cy="link-create-publisher">
			Dodaj
		</Link>
		<PublishersTable />
	</main>
);

export default AllPublishersPage;

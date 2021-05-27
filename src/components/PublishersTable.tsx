import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';
import DeletePublisher from './DeletePublisher';
import TableCell from './TableCell';

const AllPublishersTable = () => {
	const publishers = useAppSelector((state) => state.publishers);

	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Nazwa</th>
					<th>Rok założenia</th>
					<th>Akcje</th>
				</tr>
			</thead>
			<tbody>
				{publishers.map((publisher) => (
					<tr key={publisher.id} data-cy="publisher-row">
						<TableCell>{publisher.id}</TableCell>
						<TableCell>{publisher.name}</TableCell>
						<TableCell>{publisher.establishmentYear}</TableCell>
						<TableCell>
							<Link to={`/edit-publisher/${publisher.id}`} data-cy="edit">
								Edytuj
							</Link>
							<DeletePublisher id={publisher.id} />
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllPublishersTable;

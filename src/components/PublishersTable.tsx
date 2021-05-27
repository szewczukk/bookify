import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';
import DeletePublisher from './DeletePublisher';

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
						<td>{publisher.id}</td>
						<td>{publisher.name}</td>
						<td>{publisher.establishmentYear}</td>
						<td>
							<Link to={`/edit-publisher/${publisher.id}`} data-cy="edit">
								Edytuj
							</Link>
							<DeletePublisher id={publisher.id} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllPublishersTable;

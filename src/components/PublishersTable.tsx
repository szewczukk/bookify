import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { deletePublisher } from '../store/publishers';
import DeleteButton from './DeleteButton';
import TableCell from './TableCell';

const AllPublishersTable = () => {
	const { entities } = useAppSelector((state) => state.publishers);
	const dispatch = useAppDispatch();

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
				{entities.map((publisher) => (
					<tr key={publisher.id} data-cy="publisher-row">
						<TableCell>{publisher.id}</TableCell>
						<TableCell>{publisher.name}</TableCell>
						<TableCell>{publisher.establishmentYear}</TableCell>
						<TableCell>
							<Link to={`/edit-publisher/${publisher.id}`} data-cy="edit">
								Edytuj
							</Link>
							<DeleteButton
								onClick={() => dispatch(deletePublisher(publisher.id))}
							/>
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllPublishersTable;

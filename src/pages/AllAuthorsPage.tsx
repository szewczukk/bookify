import React from 'react';
import { useAppSelector } from '../store';

const AllAuthorsPage = () => {
	const authors = useAppSelector((state) => state.authors);

	return (
		(
			<div>
				<button>Dodaj</button>
				<table>
					{authors?.map((author) => (
						<tr key={author.id}>
							<td>{author.id}</td>
							<td> {author.firstName}</td> <td> {author.lastName}</td>
							<td>
								<button>Edytuj</button> <button>Usuń</button>
							</td>
						</tr>
					))}
				</table>
			</div>
		) ?? <p>Loading..</p>
	);
};

export default AllAuthorsPage;

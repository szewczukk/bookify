import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchAuthors } from '../store/authors';

const Navigation = () => {
	const dispatch = useAppDispatch();
	const authors = useAppSelector((store) => store.authors.authors);

	useEffect(() => {
		dispatch(fetchAuthors());
	}, []);

	return (
		<nav data-cy="navigation">
			<div data-cy="authors">
				<Paragraph>Autorzy</Paragraph>
				<List>
					<li>
						<a>Wszyscy</a>
					</li>
					{authors.map((author) => (
						<li key={author.id}>
							<a href="">
								{author.firstName} {author.lastName}
							</a>
						</li>
					))}
				</List>
			</div>
			<div data-cy="publishers">
				<Paragraph>Wydawnictwa</Paragraph>
				<List>
					<li>
						<a>Wszystkie</a>
					</li>
				</List>
			</div>
			<div data-cy="books">
				<Paragraph>Książki</Paragraph>
				<List>
					<li>
						<a>Wszystkie</a>
					</li>
				</List>
			</div>
		</nav>
	);
};

export default Navigation;

const Paragraph = styled.p`
	margin: 0;
`;

const List = styled.ul`
	margin: 0 0 0 2rem;
	padding: 0;
	list-style: none;
`;

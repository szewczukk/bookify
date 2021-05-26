import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchAuthors } from '../store/authors';
import { fetchPublishers } from '../store/publishers';
import { fetchBooks } from '../store/books';

const Navigation = () => {
	const dispatch = useAppDispatch();
	const { authors, publishers, books } = useAppSelector((store) => store);

	useEffect(() => {
		dispatch(fetchAuthors());
		dispatch(fetchPublishers());
		dispatch(fetchBooks());
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
					{publishers.map((publisher) => (
						<li key={publisher.id}>
							<a href="">{publisher.name}</a>
						</li>
					))}
				</List>
			</div>
			<div data-cy="books">
				<Paragraph>Książki</Paragraph>
				<List>
					<li>
						<a>Wszystkie</a>
					</li>
					{books.map((book) => (
						<li key={book.id}>
							<a href="">{book.title}</a>
						</li>
					))}
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

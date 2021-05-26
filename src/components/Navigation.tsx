import React from 'react';
import styled from 'styled-components';

const Navigation = () => (
	<nav data-cy="navigation">
		<div data-cy="authors">
			<Paragraph>Autorzy</Paragraph>
			<List>
				<li>
					<a>Wszyscy</a>
				</li>
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

export default Navigation;

const Paragraph = styled.p`
	margin: 0;
`;

const List = styled.ul`
	margin: 0 0 0 2rem;
	padding: 0;
	list-style: none;
`;

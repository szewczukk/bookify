import React from 'react';
import { useAppSelector } from '../store';
import NavigationSection from './NavigationSection';

const Navigation = () => {
	const { authors, publishers, books } = useAppSelector((store) => store);

	return (
		<nav data-cy="navigation">
			<NavigationSection
				cypressId="authors"
				subpage="authors"
				title="Autorzy"
				data={authors.entities}
			/>
			<NavigationSection
				cypressId="publishers"
				subpage="publishers"
				title="Wydawnictwa"
				data={publishers.entities}
			/>
			<NavigationSection
				cypressId="books"
				subpage="books"
				title="Książki"
				data={books.entities}
			/>
		</nav>
	);
};

export default Navigation;

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
				allString="Wszyscy"
				title="Autorzy"
				data={authors}
			/>
			<NavigationSection
				cypressId="publishers"
				subpage="publishers"
				allString="Wszystkie"
				title="Wydawnictwa"
				data={publishers}
			/>
			<NavigationSection
				cypressId="books"
				subpage="books"
				allString="Wszystkie"
				title="Ksiąki"
				data={books}
			/>
		</nav>
	);
};

export default Navigation;

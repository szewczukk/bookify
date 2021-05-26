import React from 'react';
import styled from 'styled-components';
import {
	Author,
	Book,
	Publisher,
	isPublisher,
	isBook,
	isAuthor,
} from '../utils/types';

interface Props {
	data: (Book | Author | Publisher)[];
	title: string;
	allString: string;
	cypressId: string;
}

function renderElement(element: Book | Author | Publisher) {
	if (isBook(element)) {
		return (
			<li key={element.id}>
				<a href="">{element.title}</a>
			</li>
		);
	} else if (isAuthor(element)) {
		return (
			<li key={element.id}>
				<a href="">
					{element.firstName} {element.lastName}
				</a>
			</li>
		);
	} else if (isPublisher(element)) {
		return (
			<li key={element.id}>
				<a href="">{element.name}</a>
			</li>
		);
	}
}

const NavigationSection = ({ data, allString, title, cypressId }: Props) => (
	<div data-cy={cypressId}>
		<Paragraph>{title}</Paragraph>
		<List>
			<li>
				<a>{allString}</a>
			</li>
			{data.map((element) => renderElement(element))}
		</List>
	</div>
);

export default NavigationSection;

const Paragraph = styled.p`
	margin: 0;
`;

const List = styled.ul`
	margin: 0 0 0 2rem;
	padding: 0;
	list-style: none;
`;

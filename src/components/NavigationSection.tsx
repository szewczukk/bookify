import React from 'react';
import { Link } from 'react-router-dom';
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
	subpage: string;
	title: string;
	cypressId: string;
}

function renderElement(element: Book | Author | Publisher) {
	if (isBook(element)) {
		return <li key={element.id}>{element.title}</li>;
	} else if (isAuthor(element)) {
		return (
			<li key={element.id}>
				{element.firstName} {element.lastName}
			</li>
		);
	} else if (isPublisher(element)) {
		return <li key={element.id}>{element.name}</li>;
	}
}

const NavigationSection = ({ data, title, cypressId, subpage }: Props) => (
	<div data-cy={cypressId}>
		<Link to={`/${subpage}`} data-cy={`link-${subpage}`}>
			<Paragraph>{title}</Paragraph>
		</Link>
		<List>{data.map((element) => renderElement(element))}</List>
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

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
	allString: string;
	cypressId: string;
}

function renderElement(element: Book | Author | Publisher, subpage: string) {
	if (isBook(element)) {
		return (
			<li key={element.id}>
				<Link to={`/${subpage}/${element.id}`}>{element.title}</Link>
			</li>
		);
	} else if (isAuthor(element)) {
		return (
			<li key={element.id}>
				<Link to={`/${subpage}/${element.id}`}>
					{element.firstName} {element.lastName}
				</Link>
			</li>
		);
	} else if (isPublisher(element)) {
		return (
			<li key={element.id}>
				<Link to={`/${subpage}/${element.id}`}>{element.name}</Link>
			</li>
		);
	}
}

const NavigationSection = ({
	data,
	allString,
	title,
	cypressId,
	subpage,
}: Props) => (
	<div data-cy={cypressId}>
		<Paragraph>{title}</Paragraph>
		<List>
			<li>
				<Link to={`/${subpage}`} data-cy={`link-${subpage}`}>
					{allString}
				</Link>
			</li>
			{data.map((element) => renderElement(element, subpage))}
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

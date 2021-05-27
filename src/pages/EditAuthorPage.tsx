import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store';
import CreateAuthorPage from './CreateAuthorPage';

interface RouterParams {
	id: string;
}

const EditAuthorPage = () => {
	const { id } = useParams<RouterParams>();
	const authors = useAppSelector((state) => state.authors.entities);

	const author = authors.find((author) => author.id === parseInt(id));

	return <CreateAuthorPage {...author} edit={true} />;
};

export default EditAuthorPage;

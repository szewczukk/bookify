import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store';
import CreatePublisherPage from './CreatePublisherPage';

interface RouterParams {
	id: string;
}

const EditPublisherPage = () => {
	const { id } = useParams<RouterParams>();
	const publishers = useAppSelector((state) => state.publishers);

	const author = publishers.find((publisher) => publisher.id === parseInt(id));

	return <CreatePublisherPage {...author} edit={true} />;
};

export default EditPublisherPage;

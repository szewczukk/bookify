import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store';
import CreatePublisherPage from './CreatePublisherPage';

interface RouterParams {
	id: string;
}

const EditPublisherPage = () => {
	const { id } = useParams<RouterParams>();
	const publisher = useAppSelector((state) => state.publishers.entities).find(
		(publisher) => publisher.id === parseInt(id),
	);

	return <CreatePublisherPage {...publisher} edit={true} />;
};

export default EditPublisherPage;

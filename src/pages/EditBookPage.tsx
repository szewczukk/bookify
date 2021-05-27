import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store';
import CreateBookPage from './CreateBookPage';

interface RouterParams {
	id: string;
}

const EditBookPage = () => {
	const { id } = useParams<RouterParams>();
	const book = useAppSelector((state) => state.books.entities).find(
		(book) => book.id === parseInt(id),
	);

	return <CreateBookPage {...book} edit={true} />;
};

export default EditBookPage;

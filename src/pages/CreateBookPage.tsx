import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { actions } from '../store/modal';
import { Book } from '../utils/types';
import { createBook } from '../store/books';

interface Props extends Partial<Book> {
	edit?: boolean;
}

const CreateBookPage = ({
	id,
	title,
	isbn,
	authorId,
	publisherId,
	publishmentYear,
	edit,
}: Props) => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const { authors, publishers } = useAppSelector((state) => state);

	if (!authors.length || !publishers.length) {
		return <h1>Brak wydawców i/lub autorów</h1>;
	}

	return (
		<main>
			<Link to="/books">Powrót do listy</Link>
			<Formik
				initialValues={{
					title: title || '',
					isbn: isbn || '',
					publishmentYear: publishmentYear || 0,
					authorId: authorId || authors[0].id,
					publisherId: publisherId || publishers[0].id,
				}}
				onSubmit={async (values) => {
					if (edit && id) {
						//await dispatch(editAuthor({ ...values, id }));
						history.push('/books');
						dispatch(actions.setText('Sukces'));
						dispatch(actions.toggleModal());
					} else {
						await dispatch(createBook(values));
						history.push('/books');
						dispatch(actions.setText('Sukces'));
						dispatch(actions.toggleModal());
					}
				}}
			>
				<Form data-cy="form">
					<label htmlFor="title">Tytuł</label>
					<Field
						id="title"
						name="title"
						placeholder="Tytuł"
						required
						data-cy="input-title"
					/>

					<label htmlFor="isbn">ISBN</label>
					<Field
						id="isbn"
						name="isbn"
						placeholder="ISBN"
						required
						data-cy="input-isbn"
					/>

					<label htmlFor="publishmentYear">Rok publikacji</label>
					<Field
						id="publishmentYear"
						name="publishmentYear"
						placeholder="Rok publikacji"
						required
						data-cy="input-year"
					/>

					<label htmlFor="authorId">Autor</label>
					<Field
						id="authorId"
						name="authorId"
						required
						data-cy="input-author"
						as="select"
					>
						{authors.map((author) => (
							<option key={author.id} value={author.id}>
								{author.firstName} {author.lastName}
							</option>
						))}
					</Field>

					<label htmlFor="publisherId">Wydawca</label>
					<Field
						id="publisherId"
						name="publisherId"
						required
						data-cy="input-publisher"
						as="select"
					>
						{publishers.map((publisher) => (
							<option key={publisher.id} value={publisher.id}>
								{publisher.name}
							</option>
						))}
					</Field>

					<button type="submit" data-cy="submit">
						Zapisz
					</button>
				</Form>
			</Formik>
		</main>
	);
};

export default CreateBookPage;

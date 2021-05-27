import React from 'react';
import { Field, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { createAuthor, editAuthor } from '../store/authors';
import { actions } from '../store/modal';
import { Author } from '../utils/types';
import Form from '../components/Form';

interface Props extends Partial<Author> {
	edit?: boolean;
}

const CreateAuthorPage = ({ id, firstName, lastName, edit }: Props) => {
	const dispatch = useAppDispatch();
	const history = useHistory();

	return (
		<main>
			<Link to="/authors">Powrót do listy</Link>
			<Formik
				initialValues={{ firstName: firstName || '', lastName: lastName || '' }}
				onSubmit={async (values) => {
					if (edit && id) {
						await dispatch(editAuthor({ ...values, id }));
						history.push('/authors');
						dispatch(actions.setText('Sukces'));
						dispatch(actions.toggleModal());
					} else {
						await dispatch(createAuthor(values));
						history.push('/authors');
						dispatch(actions.setText('Sukces'));
						dispatch(actions.toggleModal());
					}
				}}
			>
				<Form data-cy="form">
					<label htmlFor="firstName">Imię</label>
					<Field
						id="firstName"
						name="firstName"
						placeholder="Imię"
						required
						data-cy="input-first-name"
					/>

					<label htmlFor="lastName">Nazwisko</label>
					<Field
						id="lastName"
						name="lastName"
						placeholder="Nazwisko"
						required
						data-cy="input-last-name"
					/>

					<button type="submit" data-cy="submit">
						Zapisz
					</button>
				</Form>
			</Formik>
		</main>
	);
};

export default CreateAuthorPage;

import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { createAuthor } from '../store/authors';

const CreateAuthorPage = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();

	return (
		<div>
			<Link to="/authors">Powrót do listy</Link>
			<Formik
				initialValues={{ firstName: '', lastName: '' }}
				onSubmit={async (values) => {
					await dispatch(createAuthor(values));
					history.push('/authors');
				}}
			>
				<Form data-cy="form-create-author">
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

					<button type="submit" data-cy="submit-create-author-form">
						Zapisz
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default CreateAuthorPage;

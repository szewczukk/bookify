import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { actions } from '../store/modal';
import { createPublisher, editPublisher } from '../store/publishers';

interface Props {
	id?: number;
	name?: string;
	establishmentYear?: number;
	edit?: boolean;
}

const CreatePublisherPage = ({ id, name, establishmentYear, edit }: Props) => {
	const dispatch = useAppDispatch();
	const history = useHistory();

	return (
		<main>
			<Link to="/authors">Powrót do listy</Link>
			<Formik
				initialValues={{
					name: name || '',
					establishmentYear: establishmentYear || 0,
				}}
				validate={(values) => {
					if (values.establishmentYear > new Date().getFullYear()) {
						return { establishmentYear: 'Wrong year' };
					}
				}}
				onSubmit={async (values) => {
					if (edit && id) {
						await dispatch(editPublisher({ ...values, id }));
						history.push('/publishers');
						dispatch(actions.setText('Sukces'));
						dispatch(actions.toggleModal());
					} else {
						await dispatch(createPublisher(values));
						history.push('/publishers');
						dispatch(actions.setText('Sukces'));
						dispatch(actions.toggleModal());
					}
				}}
			>
				{({ errors }) => (
					<Form data-cy="form">
						<label htmlFor="name">Nazwa</label>
						<Field
							id="name"
							name="name"
							placeholder="nazwa"
							required
							data-cy="input-name"
						/>

						<label htmlFor="establishmentYear">Rok założenia</label>
						<Field
							id="establishmentYear"
							name="establishmentYear"
							placeholder="Nazwisko"
							required
							data-cy="input-year"
						/>
						<button type="submit" data-cy="submit">
							Zapisz
						</button>
						{errors.establishmentYear && <p>{errors.establishmentYear}</p>}
					</Form>
				)}
			</Formik>
		</main>
	);
};

export default CreatePublisherPage;

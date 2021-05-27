import React from 'react';
import { Field, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { createPublisher, editPublisher } from '../store/publishers';
import { Publisher } from '../utils/types';
import Form from '../components/Form';

interface Props extends Partial<Publisher> {
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
						return { establishmentYear: 'Niepoprawny rok założenia' };
					}
				}}
				onSubmit={async (values) => {
					if (edit && id) {
						await dispatch(editPublisher({ ...values, id }));
					} else {
						await dispatch(createPublisher(values));
					}
					history.push('/publishers');
				}}
			>
				{({ errors }) => (
					<Form data-cy="form">
						<label htmlFor="name">Nazwa</label>
						<Field
							id="name"
							name="name"
							placeholder="Nazwa"
							required
							data-cy="input-name"
						/>

						<label htmlFor="establishmentYear">Rok założenia</label>
						<Field
							id="establishmentYear"
							name="establishmentYear"
							placeholder="Rok założenia"
							required
							data-cy="input-year"
						/>
						<button type="submit" data-cy="submit">
							Zapisz
						</button>
						{errors.establishmentYear && (
							<p data-cy="error">{errors.establishmentYear}</p>
						)}
					</Form>
				)}
			</Formik>
		</main>
	);
};

export default CreatePublisherPage;

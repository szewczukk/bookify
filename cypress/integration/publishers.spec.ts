describe('Testing publishers functionality', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('Create a new publishers', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=link-create-publisher]').click();

		cy.get('[data-cy=input-name]').type('ABC');
		cy.get('[data-cy=input-year]').type('2020');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();

		cy.url().should('contain', 'publishers');

		cy.get('[data-cy=publisher-row').should('contain', 'ABC');
		cy.get('[data-cy=publisher-row').should('contain', '2020');
	});

	it('Should delete a created user', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=publisher-row')
			.contains('ABC')
			.parent()
			.within(() => {
				cy.get('[data-cy=delete]')
					.should('contain', 'Usuń')
					.click()
					.should('contain', 'Czy na pewno?')
					.click();
			});

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();
	});
});

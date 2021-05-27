describe('Testing publishers functionality', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('Create a new publisher', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=link-create-publisher]').click();

		cy.get('[data-cy=input-name]').type('ABC');
		cy.get('[data-cy=input-year]').type('2020');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();

		cy.url().should('contain', 'publishers');

		cy.get('[data-cy=publisher-row]').should('contain', 'ABC');
		cy.get('[data-cy=publisher-row]').should('contain', '2020');
	});

	it('Should hit error while creating with the wrong date', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=link-create-publisher]').click();

		cy.get('[data-cy=input-year]').type('2137');
		cy.get('[data-cy=error]').should('contain', 'Niepoprawny rok założenia');
	});

	it('Edit the new publisher', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=publisher-row')
			.contains('ABC')
			.parent()
			.within(() => {
				cy.get('[data-cy=edit]').click();
			});

		cy.get('[data-cy=input-name]').clear().type('Znak');
		cy.get('[data-cy=input-year]').clear().type('1999');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();

		cy.url().should('contain', 'publishers');

		cy.get('[data-cy=publisher-row]').should('contain', 'Znak');
		cy.get('[data-cy=publisher-row]').should('contain', '1999');
	});

	it('Should delete a created publisher', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=publisher-row')
			.contains('Znak')
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

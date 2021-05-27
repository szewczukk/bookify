describe('Testing publishers functionality', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('Create a new book', () => {
		cy.get('[data-cy=link-books]').click();
		cy.get('[data-cy=link-create-book]').click();

		cy.get('[data-cy=input-title]').type('Hobbit');
		cy.get('[data-cy=input-isbn]').type('0000000000000');
		cy.get('[data-cy=input-year]').type('2001');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();

		cy.url().should('contain', 'books');

		cy.get('[data-cy=book-row]').should('contain', 'Hobbit');
		cy.get('[data-cy=book-row]').should('contain', '2001');
		cy.get('[data-cy=book-row]').should('contain', '0000000000000');
	});

	it('Should delete a created book', () => {
		cy.get('[data-cy=link-books]').click();
		cy.get('[data-cy=book-row')
			.contains('Hobbit')
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

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

	it('Testing book form validation', () => {
		cy.get('[data-cy=link-books]').click();
		cy.get('[data-cy=link-create-book]').click();

		cy.get('[data-cy=input-year]').clear().type('2137');
		cy.get('[data-cy=error-year]').should('contain', 'Zła data');

		cy.get('[data-cy=input-isbn]').clear().type('1');
		cy.get('[data-cy=error-isbn]').should('contain', 'Zły format ISBN');
	});

	it('Edit the new book', () => {
		cy.get('[data-cy=link-books]').click();
		cy.get('[data-cy=book-row')
			.contains('Hobbit')
			.parent()
			.within(() => {
				cy.get('[data-cy=edit]').click();
			});

		cy.get('[data-cy=input-title]').clear().type('Władca Pierścieni');
		cy.get('[data-cy=input-year]').clear().type('2020');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();

		cy.url().should('contain', 'books');

		cy.get('[data-cy=book-row]').should('contain', 'Władca Pierścieni');
		cy.get('[data-cy=book-row]').should('contain', '2020');
	});

	it('Should delete a created book', () => {
		cy.get('[data-cy=link-books]').click();
		cy.get('[data-cy=book-row')
			.contains('Władca Pierścieni')
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

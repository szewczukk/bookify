describe('E2E', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Checks whether basic navigation was rendered', () => {
		cy.get('[data-cy=navigation]').within(() => {
			cy.get('[data-cy=authors]').contains('Wszyscy');
			cy.get('[data-cy=publishers]').contains('Wszystkie');
			cy.get('[data-cy=books]').contains('Wszystkie');
		});
	});

	it('Checks if authors link redirects to author subpage', () => {
		cy.get('[data-cy=link-authors]').click();

		cy.url().should('contain', 'authors');
	});

	it('Create a new author', () => {
		cy.get('[data-cy=link-authors]').click();
		cy.get('[data-cy=link-create-author]').click();

		cy.contains('Powrót do listy');
		cy.get('[data-cy=submit-create-author-form]').contains('Zapisz');

		cy.get('[data-cy=input-first-name]').type('Adam');
		cy.get('[data-cy=input-last-name]').type('Mickiewicz');
		cy.get('[data-cy=form-create-author]').submit();

		cy.url().should('contain', 'authors');
	});

	it('Delete the created author', () => {
		cy.get('[data-cy=author-Mickiewicz]').within(() => {
			cy.get('[data-cy=delete]').click();
		});
	});
});

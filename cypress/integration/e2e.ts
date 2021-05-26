describe('E2E', () => {
	before(() => {
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
});

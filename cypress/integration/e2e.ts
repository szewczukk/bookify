describe('E2E', () => {
	before(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Checks whether ', () => {
		cy.get('[data-cy=navigation]').within(() => {
			cy.get('[data-cy=authors]').contains('Wszyscy');
			cy.get('[data-cy=publishers]').contains('Wszystkie');
			cy.get('[data-cy=books]').contains('Wszystkie');
		});
	});
});

describe('Basic tests', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Checks whether basic navigation was rendered', () => {
		cy.get('[data-cy=navigation]').within(() => {
			cy.get('[data-cy=authors]').contains('Autorzy');
			cy.get('[data-cy=publishers]').contains('Wydawnictwa');
			cy.get('[data-cy=books]').contains('Książki');
		});
	});

	it('Checks if authors link redirects to author subpage', () => {
		cy.get('[data-cy=link-authors]').click();

		cy.url().should('contain', 'authors');
	});
});

describe('Testing publishers functionality', () => {
	it('Create a new publishers', () => {
		cy.get('[data-cy=link-publishers]').click();
		cy.get('[data-cy=link-create-publisher]').click();
	});
});

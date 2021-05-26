describe('E2E', () => {
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

	it('Create a new author', () => {
		cy.get('[data-cy=link-authors]').click();
		cy.get('[data-cy=link-create-author]').click();

		cy.contains('Powrót do listy');
		cy.get('[data-cy=submit]').contains('Zapisz');

		cy.get('[data-cy=input-first-name]').type('Adam');
		cy.get('[data-cy=input-last-name]').type('Mickiewicz');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();

		cy.url().should('contain', 'authors');
	});

	it('Edit the created user', () => {
		cy.get('[data-cy=link-authors]').click();

		cy.get('[data-cy=author-Mickiewicz]').within(() => {
			cy.get('[data-cy=edit]').should('contain', 'Edytuj').click();
		});

		cy.get('[data-cy=input-first-name]').clear().type('Juliusz');
		cy.get('[data-cy=input-last-name]').clear().type('Słowacki');
		cy.get('[data-cy=form]').submit();

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').should('contain', 'Ok').click();

		cy.url().should('contain', 'authors');
	});

	it('Delete the created author', () => {
		cy.get('[data-cy=link-authors]').click();

		cy.get('[data-cy=author-Słowacki]').within(() => {
			cy.get('[data-cy=delete]').should('contain', 'Usuń').click();
			cy.get('[data-cy=delete]').should('contain', 'Czy na pewno?').click();
		});

		cy.get('[data-cy=modal-text]').should('contain', 'Sukces');
		cy.get('[data-cy=modal-submit]').click();
	});
});

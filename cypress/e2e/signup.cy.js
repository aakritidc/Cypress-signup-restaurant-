/// <reference types="cypress" />

describe('Invalid Sign In Attempts to Fruitopia - 10 Times', () => {
  beforeEach(() => {
    // Clear cookies and storage to avoid session issues
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  for (let i = 0; i < 20; i++) {
    it(`Invalid sign in attempt ${i + 1}`, () => {
      cy.visit('https://fruitopia.restaurantbilling.com/signin');

      cy.get('#email').type('test@test.com');
      cy.get('#password').type('akriti');
      cy.get('button[type="submit"]').click();

      // Assert that user is still on signin page or sees an error
      cy.url().should('include', '/signin');

      // Optionally check for error message (adjust selector/text if needed)
      cy.contains('Invalid email or password').should('be.visible');
    });
  }
});


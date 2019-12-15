/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('does not authenticate with wrong credentials', () => {
    cy.findByPlaceholderText(/your username/i).type('username');
    cy.findByPlaceholderText(/your password/i).type('password');
    cy.findByText(/sign in/i).click();

    cy.contains(/wrong username or password/i);
    cy.location('pathname').should('eq', '/login');
  });

  it('does not allow to authenticate without filling the form', () => {
    cy.findByText(/sign in/i).click();

    cy.findByPlaceholderText(/your username/i).should('have.class', 'with-error');
    cy.findByPlaceholderText(/your password/i).should('have.class', 'with-error');

    cy.location('pathname').should('eq', '/login');
  });
});

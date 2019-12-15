/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import faker from 'faker';

context('Create Dragon', () => {
  beforeEach(() => {
    cy.login();
  });

  it('creates a new dragon', () => {
    cy.server();
    cy.route({ method: 'GET', url: '/api/v1/dragon' }).as('getDragons');
    cy.route({ method: 'POST', url: '/api/v1/dragon' }).as('createDragon');
    cy.route({ method: 'DELETE', url: '/api/v1/dragon/*' }).as('removeDragon');

    cy.visit('/dragons/new');

    const randomName = faker.name.findName('Dragon name');
    const randomType = `Dragon type ${faker.commerce.color()}`;

    cy.findByPlaceholderText(/dragon name/i).type(randomName);
    cy.findByPlaceholderText(/dragon type/i).type(randomType);

    cy.findByText(/create/i).click();

    cy.wait('@createDragon')
      .its('responseBody')
      .then(response => {
        cy.location('pathname').should('eq', '/dragons');
        cy.findByText(randomName).click();

        cy.location('pathname').should('eq', `/dragons/${response.id}`);

        cy.contains(randomName);
        cy.contains(randomType);

        cy.findByText(/remove/i).click();
        cy.wait('@removeDragon');

        cy.location('pathname').should('eq', '/dragons');
      });
  });
});

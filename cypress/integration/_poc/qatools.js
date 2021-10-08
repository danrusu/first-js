/// <reference types="cypress" />

// @IMPORTANT
// https://docs.cypress.io/guides/references/configuration#cypress-json

describe('qatools test suite', () => {
  beforeEach('visit homepage', () => {
    cy.visit('/');
  });

  it('Should navigate to homepage', () => {
    cy.get('h1')
      .should('be.visible')
      .contains('qa tools', { matchCase: false });
  });

  it.skip('Should have ENV vars', () => {
    console.log(Cypress.env('apiUrl'));
    console.log(Cypress.env());
  });

  it('Should fail', () => {
    cy.get('#throw').click();
  });

  it.only('Should navigate to calculator', () => {
    cy.contains('Simple calculator with API').click();
    cy.get('button[name=calculate]', { timeout: 60000 }).contains('calculate', {
      matchCase: false,
    });
  });

  //it.skip OR xit - skip tests
  //it.only - run only
});

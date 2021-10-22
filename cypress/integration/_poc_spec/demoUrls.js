/// <reference types="cypress" />

const protocol = 'https://';
const domain = 'docs.cypress.io';

describe('qatools test suite', () => {
  it('Should navigate to configuration', () => {
    //cy.visit(`${protocol}${domain}/guides/references/configuration`);
    cy.visitUrl(protocol, domain, '/guides/references/configuration');
  });

  it('Should navigate to ', () => {
    // cy.visit(protocol + domain + '/guides/references/client-certificates');
    cy.visitUrl(protocol, domain, '/guides/references/client-certificates');
  });
});

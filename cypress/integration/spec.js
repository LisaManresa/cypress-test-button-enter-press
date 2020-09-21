/// <reference types="cypress" />
describe('page', () => {
  it('should alert that data has been saved on submit click', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)

    cy.visit('index.html')

    cy
      .get('#testName')
      .type('My Name')
      .tab()
      .type('Some details');

      cy
        .get('#submitBtn')
        .click()
        .then(() => {
          expect(stub).to.be.calledWith('Your data has been saved')
        });
  });

  it('should alert that data has been saved on {enter} press of focused submit button', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)

    cy.visit('index.html')

    cy
      .get('#testName')
      .type('My Name')
      .tab()
      .type('Some details')
      .tab()
      .type('{enter}')
      .then(() => {
        expect(stub).to.be.calledWith('Your data has been saved')
      });
  });
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('#loginPanel [name="username"]').click();
    cy.get('#loginPanel [name="username"]').type('john');
    cy.get('#loginPanel [name="password"]').click();
    cy.get('#loginPanel [name="password"]').type('demo');
    cy.get('#loginPanel input.button').click();
  })
})
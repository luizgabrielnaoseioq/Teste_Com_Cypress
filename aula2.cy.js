describe('template spec', () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"))
  })

  it('passes', () => {
    cy.visitx("/products")

    cy.url().should('include', '/products')
  })
})
describe('template spec', () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"))
  })

  // Teste único de produto genérico
  it('createProduct ', () => {
    cy.createProduct()
  })

  // Repete 100 vezes com nomes únicos
  Cypress._.times(100, (i) => {
    it(`Cria o produto #${i + 1}`, () => {
      cy.createProduct(`Produto ${i + 1}`)
    })
  })

  // Outros testes comentados ou futuros
  // it('passes', () => {
  //   cy.visitx("/products")
  //   cy.url().should('include', '/products')
  // })

  // it('categories', () => {
  //   cy.categories()
  // })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get('[href="/atividade/1"]').click()
    cy.url().should('include', '/atividade/1')

    cy.get('#nascimento').type('2006-04-14')
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 18 anos de idade");

    cy.get('#nascimento').type('1932-01-31')
    cy.get('.btn').click()
    cy.get('#result').should('have.text', "Resultado: 93 anos de idade");

    cy.get('#nascimento').type('2002-01-01')
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 23 anos de idade");

    cy.get('#nascimento').type('2008-01-29')
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 17 anos de idade");

    cy.get('#nascimento').type('2024-11-06')
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 0 anos de idade");
  })

  it('Testa o sistema de soma', () => {
    cy.visit('http://localhost:8080')
    cy.get('[href="/atividade/2"]').click()
    cy.url().should('include', '/atividade/2')

    cy.get('#numb1').type("1")
    cy.get('#numb2').type("1")
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 2")

    cy.get('#numb1').clear()
    cy.get('#numb2').clear()

    cy.get('#numb1').type("12.3")
    cy.get('#numb2').type("1.7")
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 14")

    cy.get('#numb1').clear()
    cy.get('#numb2').clear()

    cy.get('#numb1').type("100000")
    cy.get('#numb2').type("200001")
    cy.get('.btn').click()
    cy.get('#result').should("have.text", "Resultado: 300001")
  });
})
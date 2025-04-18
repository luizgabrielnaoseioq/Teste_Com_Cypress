describe('IEFtest', () => {

  it('Cadastrar nova deficiencia sem nome', () => {
    cy.deficienciaSemNome()
  });

  it('Cadastrar Pessoa Sem nome', () => {
    cy.pessoaSemNome()
  });

  it('Cadastrar pessoa sem data de nascimento', () => {
    cy.pessoaSemNascimento()
  });


  it('Cadastrar pessoa que nem nasceu ainda', () => {
    cy.pessoaFutura()
  });
})
describe('Testes da Página de Login', () => {
  
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8081/index.html'); 
    });
  
    it('Deve carregar a página de login', () => {
      cy.contains('h1', 'Login');
    });
  
    it('Deve exibir erro ao enviar o formulário vazio', () => {
      cy.get('button[type="submit"]').click();
      cy.get('#message').should('contain', 'Por favor, preencha todos os campos.');
    });
  
    it('Deve exibir erro ao preencher apenas um campo', () => {
      cy.get('input[name="username"]').type('usuario');
      cy.get('button[type="submit"]').click();
      cy.get('#message').should('contain', 'Por favor, preencha todos os campos.');
    });
  
    it('Deve permitir login com credenciais corretas', () => {
      cy.get('input[name="username"]').type('usuario');
      cy.get('input[name="password"]').type('senha123');
      cy.get('button[type="submit"]').click();
      cy.get('#message').should('contain', 'Login realizado com sucesso!');
    });
  
    it('Deve resetar o formulário ao clicar no botão de limpar', () => {
      cy.get('input[name="username"]').type('usuario');
      cy.get('input[name="password"]').type('senha123');
      cy.get('button[type="reset"]').click();
      cy.get('input[name="username"]').should('have.value', '');
      cy.get('input[name="password"]').should('have.value', '');
    });
  
  });
  
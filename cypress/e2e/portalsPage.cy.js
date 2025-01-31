import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(600)

describe('Acessando páginas do portal', () => {
    before(() => {
        cy.visit('https://qa-institucional.cashme.com.br/login#ut=CASHMEMBER&ru=https://qa-institucional.cashme.com.br/cashmember&pr=PORTAL_CASHMEMBER')
        cy.get('[data-testid="ds-input-usernameField"]', {timeout:5000}).type('972.807.075-64');
        cy.get('[data-testid="ds-input-passwordField"]', {timeout:5000}).type('teste123');
        cy.get('[data-testid="authentication-button"]', {timeout:5000}).click();

    
        cy.get('.onetrust-close-btn-handler',{timeout:5000}).click();
    
        cy.url().then((novaUrl) => {
            Cypress.env('novaURL', novaUrl); // Armazena a URL para uso global nos testes
          });

          
    })

    beforeEach(() => {
        cy.wrap(Cypress.env('novaURL')).then((url) => {
          cy.visit(url); // Visita a nova URL antes de cada teste
          cy.visit(url); // Visita a nova URL antes de cada teste
        });
        cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
        cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
        cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
        cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
      });

    it('Acessando página de Simulações', () =>{
        cy.get('[href="/cashmember/simulacoes"] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6',{timeout:5000}).invoke('show').click();
        
    })

    it('Acessando página de propostas', () =>{
        cy.get('[href="/cashmember/propostas"] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6',{timeout:5000}).invoke('show').click();

    })

    it('Acessando página de membros', () =>{
        cy.get('[href="https://qa-institucional.cashme.com.br/cashmember/membros"] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6',{timeout:5000}).invoke('show').click();
        
    })

    

})




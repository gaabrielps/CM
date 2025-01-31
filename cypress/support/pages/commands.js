
const { propertyValue, credit } = require('../dataGenerator/values');




Cypress.Commands.add('acessPage', () => { //acessar página simulador
    cy.visit('https://qa-institucional.cashme.com.br/login#ut=CASHMEMBER&ru=https://qa-institucional.cashme.com.br/cashmember&pr=PORTAL_CASHMEMBER')
    cy.get('[data-testid="ds-input-usernameField"]', {timeout:5000}).type('972.807.075-64');
    cy.get('[data-testid="ds-input-passwordField"]', {timeout:5000}).type('teste123');
    cy.get('[data-testid="authentication-button"]', {timeout:5000}).click();
    cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
    cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
    cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();
    cy.get('.styles__Content-sc-197l48d-5 > [data-testid="Link"]',{timeout:5000}).click();

    cy.get('.onetrust-close-btn-handler').click();

    cy.url().then((novaUrl) => {
        cy.log('Nova URL:', novaUrl); // Exibe a URL no log do Cypress
      });
})


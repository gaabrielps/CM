const { randomCep } = require('../dataGenerator/ceps');

Cypress.Commands.add('registerProperty', () => { //cadastrar imóvel completo
    const number = Math.floor(Math.random() * 6);
    

    cy.get('[data-testid="cep"]').should('be.visible')
    cy.get('[data-testid="cep"]').type('51350320')
    cy.get('[data-testid="number"]').type(`${number}`)
    cy.get('[data-testid="sameAddress"]').click()
    cy.get(`[data-testid="ds-selector-type-${number}"]`).should('be.visible').click()
    cy.get('[data-testid="owner-self"]').click()
    if (number == 2 || number == 3) {
        cy.get('[data-testid="rented-false"]').click()
        cy.get('[data-testid="paidOff-true"]').click()
        cy.get('.c-gpDDWG-bFQZQM-color-primary').click()   
    } else {
        cy.get('[data-testid="paidOff-true"]').click()
        cy.get('.c-gpDDWG-bFQZQM-color-primary').click()
    
    }
})

// Registrar manualmente Rua, cidade e CEP 

// Verificação com CEP inválido
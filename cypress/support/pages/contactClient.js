const { gerarDadosPessoais } = require('../dataGenerator/generatePerson');
const { gerarDadosEmpresa } = require('../dataGenerator/generateCompany');

Cypress.Commands.add('contactClientPF', () => { //cadastrar dados do cliente  completo
    const dados = gerarDadosPessoais()
    
    const number = Math.floor(Math.random() * 6) + 1;

    cy.get('[data-testid="ds-input-name"]').type(dados.nomeCompleto)
    cy.get('[data-testid="ds-input-cpf"]').type(dados.cpf)
    cy.get('[data-testid="ds-input-email"]').type(dados.email)
    cy.get('[data-testid="ds-input-phoneNumber"]').type(dados.celular)
    cy.get('.c-gpDDWG-bFQZQM-color-primary', {timeout:5000}).click()

    cy.get('[data-testid="ds-input-birthDate"]', {timeout:5000}).type(dados.dataNascimento)
    cy.get('[data-testid="maritalStatus-button"]').click()
    cy.get(`[data-testid="ds-dropdown-list-select-dropdown"] > :nth-child(1)`).click()
    cy.get('[data-testid="ds-input-radio-stableUnion-false"]').click()
    cy.get('.c-gpDDWG-bFQZQM-color-primary').click()
     
})

Cypress.Commands.add('contactClientPJ', () => { //cadastrar dados do cliente  completo
    const datasCompany = gerarDadosEmpresa()
    const dados = gerarDadosPessoais()

    const number = Math.floor(Math.random() * 6) + 1;

    cy.get('[data-testid="ds-input-name"]').type(dados.nomeCompleto)
    cy.get('[data-testid="ds-input-email"]').type(dados.email)
    cy.get('[data-testid="ds-input-phoneNumber"]').type(dados.celular)
    cy.get('.c-gpDDWG-bFQZQM-color-primary', {timeout:5000}).click()

    cy.get('[data-testid="ds-input-cnpj"]').type(datasCompany.cnpj)
    cy.get('[data-testid="ds-input-companyName"]').type(datasCompany.cnpj)
    
    cy.get('[data-testid="openingTimeRange-label"]').click()
    cy.get(':nth-child(3) > .sc-124be8c-0 > [data-testid="ds-dropdown-list-select-dropdown"] > :nth-child(1)').click()

    cy.get('[data-testid="lineOfBusiness-button"]').click()
    cy.get(':nth-child(4) > .sc-124be8c-0 > [data-testid="ds-dropdown-list-select-dropdown"] > :nth-child(1)').click()
    
    cy.get('[data-testid="monthlyBilling-button"]').click()
    cy.get(':nth-child(5) > .sc-124be8c-0 > [data-testid="ds-dropdown-list-select-dropdown"] > :nth-child(1)').click()

    cy.get('.c-gpDDWG-bFQZQM-color-primary', {timeout:5000}).click()

})


// Inserindo CPF invalido

// Inserindo CNPJ invalido

// Inserindo celular invalido
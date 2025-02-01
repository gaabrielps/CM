const { gerarDadosPessoais } = require('../dataGenerator/generatePerson');
const { gerarDadosEmpresa } = require('../dataGenerator/generateCompany');
const { propertyValue, credit } = require('../dataGenerator/values');


Cypress.Commands.add('simulationPF', () => { 
        const dados = gerarDadosPessoais()

        cy.get('.styles__SearchAndNew-sc-11ufqyh-4 > [data-testid="Link"]').click();
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(1) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(dados.cpf);

        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]',{timeout:5000}).should('be.visible').scrollIntoView() 
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(dados.dataNascimento); 
       
        /* ==== End Cypress Studio 
        cy.get('[data-testid="NaturalPerson"] > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('[data-testid="NaturalPerson"] > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').click();
        cy.get('.lcWyHw > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(dados.nomeCompleto);

        cy.get(':nth-child(3) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get(':nth-child(3) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(dados.email);

        cy.get('#propertyStateContent').click();
        cy.get('.styles__OptionsBox-sc-1e4k2kl-6 > :nth-child(16)').click();

        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(1) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(credit);

        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(propertyValue);
        cy.get('#submit').click();
      End Cypress Studio ==== */




})

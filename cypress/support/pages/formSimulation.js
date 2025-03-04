const { gerarDadosPessoais } = require('../dataGenerator/generatePerson');
const { gerarDadosEmpresa } = require('../dataGenerator/generateCompany');
const { propertyValue, credit } = require('../dataGenerator/values');

const dados = gerarDadosPessoais()
const dadosCNPJ = gerarDadosEmpresa()
Cypress.Commands.add('goToFormSimulation', () => { 
        


        


        


        cy.pause()

        //verificar dados da proposta aberta
        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="Title"]',{timeout:5000}).contains(dados.nomeCompleto).should('exist');
        
})



Cypress.Commands.add('newContactPF', () => { 
        //cy.get('.styles__SearchAndNew-sc-11ufqyh-4 > [data-testid="Link"]').click();
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(1) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(dados.cpf);

        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]',{timeout:5000}).should('be.visible').scrollIntoView() 
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(dados.dataNascimento); 

        cy.get('[data-testid="NaturalPerson"] > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.xpath("//input[@data-testid='Real-Input'][@id='name']").type(dados.nomeCompleto);

        cy.get(':nth-child(3) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.xpath("//input[@data-testid='Real-Input'][@id='email']").type(dados.email);  
})

Cypress.Commands.add('newcontactCNPJ', () => {
        cy.xpath("//*[(@id = 'labeloptionLegal-personType')]").click()

        cy.get('[data-testid="LegalPerson"] > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.xpath("//*[(@id = 'document')]").type(dadosCNPJ.cnpj)

        cy.get('[data-testid="LegalPerson"] > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.xpath("//*[(@id = 'name')]").type(dadosCNPJ.nomeEmpresa)

        cy.get(':nth-child(3) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.xpath("//*[(@id = 'phoneNumber')]").type(dadosCNPJ.celular)

        cy.get(':nth-child(4) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.xpath("//*[(@id = 'email')]").type(dadosCNPJ.email)
})


Cypress.Commands.add('selectState', () => { 
        cy.get('#propertyStateContent').click();
        cy.get('.styles__OptionsBox-sc-1e4k2kl-6 > :nth-child(5)', {timeout:10000}).click();
})

Cypress.Commands.add('creditAndPropertyValue', () => { 
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(1) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(credit)
        
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(propertyValue)
})

Cypress.Commands.add('SubimitAmdCheckSimulation', () => { 
        cy.get('#submit',{timeout:10000}).should('be.visible')
        cy.get('#submit',{timeout:10000}).click();
        cy.get('#submitProposal').click();

})

Cypress.Commands.add('selectCorrection', () => { 
 
})

Cypress.Commands.add('selectIndex', () => { 
 
})

Cypress.Commands.add('selectAmortization', () => { 
        
})

Cypress.Commands.add('goToProposal', () => {
        //check information about proposal
        cy.get('#submitProposal', {timeout: 15000}).should('be.visible')
        cy.get('#submitProposal', {timeout: 15000}).click()
})

Cypress.Commands.add('selectLack', () => { 
 //carencia
})





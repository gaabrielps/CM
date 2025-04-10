const { gerarDadosPessoais } = require('../dataGenerator/generatePerson');
const { gerarDadosEmpresa } = require('../dataGenerator/generateCompany');
const { propertyValue, credit } = require('../dataGenerator/values');

import { Selectors } from '../selectors';


const dadosCNPJ = gerarDadosEmpresa()

Cypress.Commands.add('goToFormSimulation', () => { 
        cy.pause()
        //verificar dados da proposta aberta
        cy.get(':nth-child(2) > :nth-child(1) > [data-testid="Title"]',{timeout:5000}).contains(dados.nomeCompleto).should('exist');   
})

Cypress.Commands.add('acessarSimulacoes', () => { 
        cy.get(Selectors.incio.paginaSimulacao).invoke('show').click()
})

Cypress.Commands.add('acessarPropostas', () => { 
        cy.get(Selectors.incio.paginaProposta).invoke('show').click()        
})

Cypress.Commands.add('acessarGerenciamentoTimes', () => { 
        cy.get(Selectors.incio.paginaGerenciamentoEquipe).invoke('show').click()
})


Cypress.Commands.add('newContactPF', () => { 
        const dados = gerarDadosPessoais()
        //cy.get('.styles__SearchAndNew-sc-11ufqyh-4 > [data-testid="Link"]').click();
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get(Selectors.simulationForm.dadosDoCliente.documento).type(dados.cpf);

        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get('.styles__GridSimulation-sc-16mlk6i-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]',{timeout:5000}).should('be.visible').scrollIntoView() 
        cy.get(Selectors.simulationForm.dadosDoCliente.dataNascimento).type(dados.dataNascimento); 

        cy.get('[data-testid="NaturalPerson"] > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get(Selectors.simulationForm.dadosDoCliente.nome).type(dados.nomeCompleto);

        cy.get(':nth-child(3) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get(Selectors.simulationForm.dadosDoCliente.email).type(dados.email);  
})



Cypress.Commands.add('newcontactCNPJ', () => {
        cy.xpath("//*[(@id = 'labeloptionLegal-personType')]").click()

        cy.get('[data-testid="LegalPerson"] > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get(Selectors.simulationForm.dadosDoCliente.documento).type(dadosCNPJ.cnpj)

        cy.get('[data-testid="LegalPerson"] > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get(Selectors.simulationForm.dadosDoCliente.nome).type(dadosCNPJ.nomeEmpresa)

        cy.get(':nth-child(3) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get(Selectors.simulationForm.dadosDoCliente.celular).type(dadosCNPJ.celular)

        cy.get(':nth-child(4) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
        cy.get(Selectors.simulationForm.dadosDoCliente.email).type(dadosCNPJ.email)
})


Cypress.Commands.add('selectState', (estado) => { 
        cy.get(Selectors.simulationForm.estado.campo).click();
        const xpath = Selectors.simulationForm.estado.nomeDoEstado(estado);
        cy.xpath(Selectors.simulationForm.estado.nomeDoEstado(estado)).click();
        console.log('XPath usado:', xpath); // Debug no DevTools

})

Cypress.Commands.add('creditAndPropertyValue', () => { //Inserir valor do imóvel e crédito
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(1) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(1) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(credit)
      
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(2) > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click();
        cy.get('.styles__InputWrapper-sc-92bf0q-1 > :nth-child(2) > [data-testid="InputWrapper"] > [data-testid="Real-Input"]').type(propertyValue)
})

Cypress.Commands.add('calculoSimulacao', () => { //Calcular simulação 
        cy.get(Selectors.simulationForm.botaoCalcularSIM).click()
        cy.get(Selectors.simulationForm.botaoTransformarPRO).should('be.visible')
        
})

Cypress.Commands.add('transformarProposta', () => { //Enviar proposta 
        cy.get(Selectors.simulationForm.botaoTransformarPRO).should('be.visible')
        cy.get(Selectors.simulationForm.botaoTransformarPRO).click()
        cy.get("[id='creditPurposeLabel creditPurposeContent']").should('be.visible')

})

Cypress.Commands.add('selectCorrection', (correcao) => { //Correção
        cy.xpath(Selectors.simulationForm.tipoCorrecao(correcao)).should('exist').click();
})

Cypress.Commands.add('selectIndex', (indexador) => { //Index
        cy.xpath(Selectors.simulationForm.tipoIndexador(indexador)).should('exist').click();
})

Cypress.Commands.add('selectAmortization', (amortizador) => { //Amortização
        cy.xpath(Selectors.simulationForm.tipoAmortizacao(amortizador)).should('exist').click();
})


Cypress.Commands.add('selectLack', () => { 
 //carencia
})

Cypress.Commands.add('simulationPF', () => { 
        cy.get('[data-testid="Link"]').click()
        cy.newContactPF()
        cy.selectState('Pernambuco')
        cy.creditAndPropertyValue()
        cy.selectCorrection('Post')
        cy.selectIndex('CDI')
        cy.selectAmortization('Sac')
        cy.calculoSimulacao()
        cy.transformarProposta()
  
})

Cypress.Commands.add('simulationPJ', () => { 
        cy.get('[data-testid="Link"]').click()
        cy.newcontactCNPJ()
        cy.selectState('Pernambuco')
        cy.creditAndPropertyValue()
        cy.selectCorrection('Post')
        cy.selectIndex('CDI')
        cy.selectAmortization('Sac')
        cy.calculoSimulacao()
        cy.transformarProposta()  
})





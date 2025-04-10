import { slowCypressDown } from 'cypress-slow-down'
import { Selectors } from '../support/selectors';
slowCypressDown(600)

describe('Validar fluxos na criação de simulações', () => {
    before(() => {
        cy.visit('https://qa-institucional.cashme.com.br/login#ut=CASHMEMBER&ru=https://qa-institucional.cashme.com.br/cashmember&pr=PORTAL_CASHMEMBER')
        cy.login('responsavel') 
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
        cy.get(Selectors.incio.modalAfterLogin).click();
        cy.get(Selectors.incio.modalAfterLogin).click();
        cy.get(Selectors.incio.modalAfterLogin).click();
        cy.get(Selectors.incio.modalAfterLogin).click();
      });

    it('Criação de uma simulação com cliente PF', () =>{
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

    it('Criação de uma simulação com cliente PJ', () =>{
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

    it('Criação de uma simulação sem dados pessoais', () =>{
      cy.get('[data-testid="Link"]').click()
      cy.xpath('//*[(@id = "isFastCalculation")]').click()
      cy.selectState('Pernambuco')
      cy.creditAndPropertyValue()
      cy.get('#submit',{timeout:10000}).click();
      cy.xpath("//*[(@id = 'submitProposal')][.='Preencher dados do cliente']", {timeout:15000})
      
    }) 

}),

describe('Validar fluxos na listagem de simulações', () => {
  before(() => {
      cy.visit('https://qa-institucional.cashme.com.br/login#ut=CASHMEMBER&ru=https://qa-institucional.cashme.com.br/cashmember&pr=PORTAL_CASHMEMBER')
      cy.login('responsavel')
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
      cy.get(Selectors.incio.modalAfterLogin).click();
      cy.get(Selectors.incio.modalAfterLogin).click();
      cy.get(Selectors.incio.modalAfterLogin).click();
      cy.get(Selectors.incio.modalAfterLogin).click();
    });

    it('Verificar fluxo de edição de uma simulação', () =>{
      cy.acessarSimulacoes()
      cy.xpath(Selectors.listaSimulacoes.verOpcoes).click()
      cy.xpath(Selectors.listaSimulacoes.editar).click()
      cy.selectState('São Paulo')
      cy.calculoSimulacao()
      cy.transformarProposta()
    }) 
  
})








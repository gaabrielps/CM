import { Selectors } from '../support/selectors';
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(600)

describe('Criando de propostas', () => {
    before(() => {
      
        cy.visit('https://qa-institucional.cashme.com.br/login#ut=CASHMEMBER&ru=https://qa-institucional.cashme.com.br/cashmember&pr=PORTAL_CASHMEMBER');
        cy.login('responsavel')

    
        cy.get('.onetrust-close-btn-handler').click();
    
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

    it('Criação de uma proposta padrão PF', () =>{

      //selecionando uma proposta PF
      cy.simulationPF()

      //criando proposta
      cy.selectProduct()
      
      //Dados do cliente principal
      cy.completeDataClientPF()
      cy.registerPartiner('Solteiro(a)')
      cy.sourceOfIncome()
      cy.monthlyIncome()
      cy.registerProperty()
      cy.saveDatas()

      //endereço garantia
      cy.AddProperty()
      cy.saveDatas()


      // finalidade
      cy.creditPurposeAndSendProposals()
    })

    it('Criação de uma proposta padrão PJ', () =>{
      //selecionando uma proposta PJ
      cy.simulationPJ()

      //criando proposta
      cy.selectProduct()
      
      //Dados do cliente principal PJ
      cy.xpath("//a[.='Completar dados']").click()
      cy.typeCompany()
      cy.lineOfBusiness()
      cy.dateCreateCompany()
      cy.monthlyBilling()
      cy.registerProperty()
      cy.saveDatas()

      //socio
      cy.xpath("//a[normalize-space()='Cadastre o sócio']").click()
      cy.completeDataClientPJ()
      cy.registerPartiner('Solteiro(a)')
      cy.registerProperty()
      cy.saveDatas()

      //endereço garantia
      cy.AddProperty()
      cy.saveDatas()

      // finalidade
      cy.creditPurposeAndSendProposals()
    })

    it('Criação de uma proposta padrão PF com conjuge', () =>{

      //selecionando uma proposta PF
      cy.simulationPF()

      //criando proposta
      cy.selectProduct()
      
      //Dados do cliente principal
      cy.completeDataClientPF()
      cy.registerPartiner('Casado(a)')
      cy.sourceOfIncome()
      cy.monthlyIncome()
      cy.registerProperty()
      cy.saveDatas()

      //inserir conjuge
      cy.registerSpouse()
      cy.saveDatas()

      //endereço garantia
      cy.AddProperty()
      cy.saveDatas()



      // finalidade
      cy.creditPurposeAndSendProposals()
    })

})







Cypress.Commands.add('selectProduct', () => {

    cy.xpath("//*[(@id='creditPurposeContent')][.='Selecionar produto']").click()
    cy.xpath("//li[@role='listitem'][.='Home Equity']").click()
})

Cypress.Commands.add('completeDatasPrincipalClient', () => {
    cy.xpath("//a[.='Completar dados']").click()

    //tipo de empresa
    cy.xpath("//*[(@id='companyTypeContent')]").click()
    cy.xpath("//li[@role='listitem'][.='Sociedade Individual']").click()

    //ramo de atuação
    cy.xpath("//*[(@id='lineOfBusinessContent')]").click()
    cy.xpath("//li[@role='listitem'][.='Vendas']").click()

    //Faturamento mensal
    cy.xpath("//*[(@id='monthlyBillingContent')]").click()
    cy.xpath("//li[@role='listitem'][.='Microempresa: até R$ 30.000,00 mensais']").click()

    //Endereço do cliente
    cy.xpath("//*[(@id='zipCode')]").click()
    cy.xpath("//*[(@id='address')]").click()
    cy.xpath("//*[(@id='number')]").click()
    cy.xpath("//*[(@id='complement')]").click()
    cy.xpath("//*[(@id='district')]").click()
    cy.xpath("//button[@data-testid='Button']").click()






})

Cypress.Commands.add('registerNewProponentPF', () => { 

}) 

Cypress.Commands.add('registerPartiner', () => { 

}) 

Cypress.Commands.add('registerSpouse', () => { 

}) 

Cypress.Commands.add('registerProperty', () => { 

}) 

Cypress.Commands.add('PurposeCredit', () => { 

})

Cypress.Commands.add('attachDocuments', () => { 

})

Cypress.Commands.add('sendProposal', () => { 

})
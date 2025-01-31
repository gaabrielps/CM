
//separar essas paginas pois dependendo se for PF ou PJ temos que utilizar perarado
Cypress.Commands.add('rentAndCredit', () => { //cadastrar dados do cliente  completo
    const number = Math.floor(Math.random() * 8) + 1;
    const numberHelp = Math.floor(Math.random() * 7);

    cy.get('[data-testid="ds-input-monthlyIncome"]').type('10000')
    cy.get('[data-testid="incomeType-label"]').click()
    cy.get(`[data-testid="ds-dropdown-list-select-dropdown"] > :nth-child(${number})`).click()
    cy.get('.c-gpDDWG-bFQZQM-color-primary').click()


    cy.get(`[data-testid="ds-label-checkbox-creditPurpose-${numberHelp}"] > #creditPurpose-${numberHelp}`).click()
    cy.get('.sc-31d778d8-7 > .ds-label-checkbox > .c-eNMBkv').click()
    cy.get('.c-gpDDWG-bFQZQM-color-primary').click()

})  

Cypress.Commands.add('CreditMotive', () => { //cadastrar motivo do crédito
    const numberHelp = Math.floor(Math.random() * 7);
    cy.get(`[data-testid="ds-label-checkbox-creditPurpose-${numberHelp}"] > #creditPurpose-${numberHelp}`).click()
    cy.get('.c-gpDDWG-bFQZQM-color-primary').click()

})  
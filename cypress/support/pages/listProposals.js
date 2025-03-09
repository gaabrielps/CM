
Cypress.Commands.add('selectProposalsPJ', () => {
    //entrar na listagem 
    cy.get('[href="/cashmember/propostas"] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6',{timeout:5000}).invoke('show').click();
    cy.get('[data-testid="PageTitleAndSubtitle"] > [data-testid="Text"]').should('have.text', 'Aqui você acompanhar o status de cada proposta.')


    //Filtrar propostas PJ
    cy.xpath("//button[@id='filterStatusLabel filterStatusContent']").click()
    cy.xpath("//input[@id='filterStatuscheckboxCREATED']").click()
    cy.wait(5000)

    //procurar por propostas que contem ltda
    cy.xpath("(//td[@headers='header-name']//a[contains(text(), 'Ltda')])[1]").click()

    //verificar se estamos de fato em uma proposta pj
    cy.xpath("//p[@data-testid='Text'][.='Proposta PJ']").should('be.visible')

})

Cypress.Commands.add('selectProposalsPF', () => {
    //entrar na listagem 
    cy.get('[href="/cashmember/propostas"] > .styles__MenuItem-sc-1uwzd7g-5 > .styles__MenuLinkTitle-sc-1uwzd7g-6',{timeout:5000}).invoke('show').click();
    cy.get('[data-testid="PageTitleAndSubtitle"] > [data-testid="Text"]').should('have.text', 'Aqui você acompanhar o status de cada proposta.')


    //Filtrar propostas de cadastro
    cy.xpath("//button[@id='filterStatusLabel filterStatusContent']").click()
    cy.xpath("//input[@id='filterStatuscheckboxCREATED']").click()
    cy.wait(5000)

    //procurar por propostas que  NÃO contem ltda
    cy.xpath("(//td[@headers='header-name']//a[not(contains(text(), 'Ltda'))])[1]").click()

    //verificar se estamos de fato em uma proposta pj
    cy.xpath("//p[@data-testid='Text'][.='Proposta PF']").should('be.visible')

})
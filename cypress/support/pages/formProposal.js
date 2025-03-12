const { gerarDadosPessoais } = require('../dataGenerator/generatePerson');


const dados = gerarDadosPessoais()

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

Cypress.Commands.add('completeDataClientPF', () => { 
    cy.xpath("//a[.='Completar dados']").click()
    cy.xpath("//span[@for='phoneNumber']").type(dados.celular)
}) 

Cypress.Commands.add('completeDataClientPJ', () => { 
    cy.xpath("//span[@for='taxId']").click()
    cy.xpath("//input[@id='taxId']").type(dados.cpf)

    cy.xpath("//span[@for='name']").click()
    cy.xpath("//input[@id='name']").type(dados.nomeCompleto)

    cy.xpath("//span[@for='email']").click()
    cy.xpath("//input[@id='email']").type(dados.email)

    cy.xpath("//span[@for='birthDate']").click()
    cy.xpath("//input[@id='birthDate']").type(dados.dataNascimento)

    cy.xpath("//span[@for='phoneNumber']").click()
    cy.xpath("//input[@id='phoneNumber']").type(dados.celular)

    cy.xpath("//span[@for='percentage']").click()
    cy.xpath("//input[@id='percentage']").type('100')

    cy.xpath("//div[@id='identificationTypeContent']").click()
    cy.xpath("//li[normalize-space()='Anuente']").click()

}) 

Cypress.Commands.add('registerPartiner', (maritalStatus) => {
    // tornar aletório
    cy.xpath("//div[@id='maritalStatusContent']").click()
    cy.xpath(`//li[normalize-space()='${maritalStatus}']`).click()
}) 

Cypress.Commands.add('registerSpouse', () => {
    // tornar aletório
    cy.xpath("//a[.='Cadastre o cônjuge']").click()
    cy.xpath("//span[@for='taxId']").click()
    cy.xpath("//input[@id='taxId']").type(dados.cpf)

    cy.xpath("//span[@for='name']").click()
    cy.xpath("//input[@id='name']").type(dados.nomeCompleto)

    cy.xpath("//span[@for='email']").click()
    cy.xpath("//input[@id='email']").type(dados.email)

    cy.xpath("//span[@for='birthDate']").click()
    cy.xpath("//input[@id='birthDate']").type(dados.dataNascimento)

    cy.xpath("//span[@for='phoneNumber']").click()
    cy.xpath("//input[@id='phoneNumber']").type(dados.celular)

    cy.xpath("//div[@id='identificationTypeContent']").click()
    cy.xpath("//li[normalize-space()='Anuente']").click()

    cy.xpath("//input[@id='sameAddress']").click()
}) 

Cypress.Commands.add('sourceOfIncome', () => { 
//fonte de renda (tornar aleatorio)
    cy.xpath("//div[@id='incomeTypeContent']").click()
    cy.xpath("//li[normalize-space()='Autônomo']").click()

    cy.xpath("//div[@id='lifespanContent']").click()
    cy.xpath("//li[normalize-space()='Abaixo de 6 meses']").click()

    cy.xpath("//div[@id='autonomoLineOfBusinessContent']").click()
    cy.xpath("//li[normalize-space()='Vendas']").click()
}) 

Cypress.Commands.add('registerProperty', () => { 
    cy.get('.styles__Zipcode-sc-ktpad6-0 > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
    cy.xpath("//input[@id='zipCode']").type("04551000")
    cy.wait(5000)
    cy.get('.styles__NumberWrapper-sc-ktpad6-11 > [data-testid="Input"] > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
    cy.xpath("//input[@id='number']").type("242")
}) 

Cypress.Commands.add('monthlyIncome', () => { 
    cy.get('.styles__MonthlyIncome-sc-1ujz49r-1 > [data-testid="InputWrapper"] > .commonStyles__BaseLabel-sc-1fwn9w0-2').click()
    cy.xpath("//input[@id='monthlyIncomeCents']").type('20000000')
})

Cypress.Commands.add('AddProperty', () => { 
    cy.xpath("//p[normalize-space()='Adicionar um imóvel']").click()
    cy.xpath("//input[@id='sameAddress']").click()

    cy.xpath("//div[@id='propertyTypeContent']").click()
    cy.xpath("//li[normalize-space()='Casa']").click()

    cy.xpath("(//input[@name='owners']/parent::label//span)[1]").click()


    cy.xpath("//label[@id='labeloptionfalse-rented']").click()
    cy.xpath("//label[@id='labeloptionfalse-financed']").click()
    cy.xpath("//label[@id='labeloptionfalse-debits']").click()
})

Cypress.Commands.add('saveDatas', () => { 
    cy.xpath("//button[@type='submit']").click()

})

Cypress.Commands.add('creditPurposeAndSendProposals', () => { 
    cy.xpath("//form[@action='#']//div[@id='creditPurposeContent']").click()
    cy.xpath("//input[@id='creditPurposecheckboxINVESTMENT']").click()
    cy.xpath("//form[@action='#']//button[@id='creditPurposeLabel creditPurposeContent']").click()
    cy.xpath("//button[@class='styles__Wrapper-sc-a9x515-0 dNJcoh styles__SubmitionButton-sc-1s1s719-3 jqGOXn']").click()
    cy.xpath("//button[@id='alertPrimaryButton']").click()
})

Cypress.Commands.add('typeCompany', () => { //typo de empresa
    cy.xpath("//div[@id='companyTypeContent']").click()
    cy.xpath("//li[normalize-space()='Sociedade Individual']").click()
})

Cypress.Commands.add('lineOfBusiness', () => { //ramo de atuação
    cy.xpath("//div[@id='lineOfBusinessContent']").click()
    cy.xpath("//li[normalize-space()='Vendas']").click()
})

Cypress.Commands.add('dateCreateCompany', () => { //data de abertura da empresa
    cy.xpath("//div[@id='lifespanContent']").click()
    cy.xpath("//li[normalize-space()='Entre 1 há 3 anos']").click()
})

Cypress.Commands.add('monthlyBilling', () => { //faturamento mensal
    cy.xpath("//div[@id='monthlyBillingContent']").click()
    cy.xpath("//div[@class='styles__Wrapper-sc-127r3zd-0 caUtTN']//li[3]").click()
})

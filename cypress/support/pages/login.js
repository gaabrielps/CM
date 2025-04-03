import { Selectors } from '../selectors';

Cypress.Commands.add('login', (userType) => {
    cy.fixture('users').then((users) => {
        const user = users[userType];        
        cy.get(Selectors.login.cpf).type(user.cpf);
        cy.get(Selectors.login.password).type(user.password, { log: false }); // `log: false` oculta a senha no log
        cy.get(Selectors.login.submitButton).click();
        
      });

})
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ************************************************

// ***********
import 'cypress-plugin-xhr-toggle'

// Import commands.js using ES2015 syntax:
import './pages/formSimulation'
import './pages/formProposal'
import './pages/listProposals'
import './pages/login'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Ignora erros da aplicação
  });


//simular cursor do mouse
import 'cypress-real-events/support';

// Importação da lib para usar xpath
import 'cypress-xpath';

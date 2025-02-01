const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jggobs',
  e2e: {
    viewportWidth: 1920, // Largura da viewport
    viewportHeight: 1080, // Altura da viewport
    baseUrl: 'https://qa-institucional.cashme.com.br/login#ut=CASHMEMBER&ru=https://qa-institucional.cashme.com.br/cashmember&pr=PORTAL_CASHMEMBER',
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true, //acesso ao cypress studio
  
  },
});


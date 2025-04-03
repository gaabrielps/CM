const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jggobs',
  e2e: {
    viewportWidth: 1920, // Largura da viewport
    viewportHeight: 1080, // Altura da viewport
    defaultCommandTimeout: 45000, //timeoutmaximo até aparecer um elemento em tela
    env: {hideXhr: true},

    video: true,  // Garante que o vídeo será gravado
    videosFolder: "cypress/downloads/videos",  // Define a pasta onde os vídeos serão armazenados
    screenshotsFolder: "cypress/downloads/screenshots",  // Define a pasta para salvar capturas de tela
    screenshotOnRunFailure: true,  // Captura automaticamente quando um teste falha

    setupNodeEvents(on, config) {
      // implement node event listeners here

      
    },
    experimentalStudio: true, //acesso ao cypress studio
  
  },
});


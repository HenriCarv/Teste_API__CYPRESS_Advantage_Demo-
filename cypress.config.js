const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Você pode adicionar configurações específicas aqui se necessário
    },
    baseUrl: 'https://www.advantageonlineshopping.com',
    defaultCommandTimeout: 10000,
    specPattern: [
      'cypress/e2e/**/*.cy.js',
      'cypress/e2e/GET/*.js'
    ],
  },
  env: {
    apiUrl: 'https://www.advantageonlineshopping.com'
  }
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // You can add event listeners or plugins here if needed
      

    },
    specPattern: '../project/cypress/integration/tests/*.js'
  },
});


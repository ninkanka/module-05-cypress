const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "spec, mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mochawesome",
        overwrite: false,
        html: false,
        json: true,
      },
    },
    setupNodeEvents(on, config) {
    },
  },
});

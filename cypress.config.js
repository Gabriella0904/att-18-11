const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",

    baseUrl: "http://localhost:5500", 
    viewportWidth: 1280, 
    viewportHeight: 720, 

    defaultCommandTimeout: 10000, 

    setupNodeEvents(on, config) {
    },

    video: true, 
    screenshotsFolder: "cypress/screenshots", 
    videosFolder: "cypress/videos", 

    excludeSpecPattern: ["**/examples/*"], 

    pageLoadTimeout: 60000, 
  },
});


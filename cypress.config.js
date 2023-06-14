const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tesla.com/',
    "viewportHeight":1080,
    "viewportWidth":1920,
    "includeShadowDom": true,
    "retries": 1,
    "experimentalWebKitSupport": true,
    "experimentalStudio": true,
    "experimentalRunAllSpecs": true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Tesla Automation Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

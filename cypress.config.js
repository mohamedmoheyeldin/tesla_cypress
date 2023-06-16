const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b4pi62',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportPageTitle: 'Tesla Automation Report',
      charts: true,
      quiet: false,
      showPassed: true,
      showFailed: true,
      showSkipped: true,
      inlineAssets: true,
      saveAllAttempts: true,
      showTestDuration: true,
      embeddedScreenshots: true
    },


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    projectId: "b4pi62",
    baseUrl: 'https://www.tesla.com/',
    "viewportHeight":1080,
    "viewportWidth":1920,
    "retries": 1,
    "experimentalWebKitSupport": true,
    "experimentalRunAllSpecs": true,
    "experimentalStudio": true,
    "includeShadowDom": true,

  },
});

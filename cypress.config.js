const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'qase',
  reporterOptions: {
    apiToken: process.env.QASE_API_TOKEN,
    projectCode: "HRC",
    basePath: "qase.io",
    runComplete: true,
    logging: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@qase/cypress/dist/plugin')(on, config);
      return config;
    },
  },
});

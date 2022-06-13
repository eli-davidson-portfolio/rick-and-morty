const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't2twhd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

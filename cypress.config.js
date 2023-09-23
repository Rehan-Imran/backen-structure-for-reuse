const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ciaesc",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.edu.goit.global/account/login",
    viewportHeight: 1280,
    viewportWidth: 720,
    video: true,
  },
});

const cucumber = require  ('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());


    },
    specPattern: "**/*.feature",
  },
  screenshotsFolder: process.env.SCREENSHOTS_FOLDER,
  //scrollBehavior: false,
  scrollBehavior: 'nearest'
};


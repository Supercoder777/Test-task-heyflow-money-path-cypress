const { defineConfig } = require("cypress");

{
  "experimentalStudio"; true,
  "WatchForFileChanges"; false,
  "reporter"; "mochawesome",
  "reporterOptions";{
      "charts";true,
      "overwrite";true,
      "html"; false,
      "json"; true,
      "reportDir"; "cypress/reports"

  }
 
}

{
  "retries"; 0
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


{

  



}



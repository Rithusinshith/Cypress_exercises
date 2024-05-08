const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    baseUrl:'https://www.automationexercise.com/',
    QaAutomationUser: 'raj@example.com',
    QaAutomationPassword: '1234',

  },
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,
  e2e: {
  
 

  },
});

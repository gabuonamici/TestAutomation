const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      const options = {
        webpackOptions: require('./webpack.config'),
      };

      on('file:preprocessor', webpackPreprocessor(options));
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://advantageonlineshopping.com',
    chromeWebSecurity: false,
  },
});

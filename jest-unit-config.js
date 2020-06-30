// use default configuration of jest
const jestConfig = require('./jest.config');
// only test files with spec name
jestConfig.testMatch = ['**/*.spec.js'];
module.exports = jestConfig;

// use default configuration of jest
const jestConfig = require('./jest.config');
// only test files with test name
jestConfig.testMatch = ['**/*.test.js'];
module.exports = jestConfig;

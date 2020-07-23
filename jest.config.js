
module.exports = {
  // define the folder to coverage jest files
  coverageDirectory: 'coverage',
  // define environment
  testEnvironment: 'node',
  // select coverage files to watch
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/index.js'],
  // define root directory to avoid loop when using --watch flag
  roots: ['src', '__mocks__'],
  preset: '@shelf/jest-mongodb'
};

# Jest, Test Driven Development and Clean Architecture
![GitHub package.json version](https://img.shields.io/github/package-json/v/julioneljunior/study-jest-tdd-clean-arch?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/julioneljunior/study-jest-tdd-clean-arch?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/julioneljunior/study-jest-tdd-clean-arch?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/julioneljunior/study-jest-tdd-clean-arch?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/julioneljunior/study-jest-tdd-clean-arch?style=flat-square)
![GitHub](https://img.shields.io/github/license/julioneljunior/study-jest-tdd-clean-arch?style=flat-square)

A simple API with one route (POST /login) (maybe more) to study Jest, TDD and Clean Architecture.

Using the free course: API em NodeJS com Clean Architecture e TDD by https://github.com/rmanguinho
## package.json scripts
###  npm test
> Default jest configuration
 ```
 jest --colors --noStackTrace --passWithNoTests --runInBand
 ```
Flag | Meaning
------------ | -------------
`--colors` | Forces test results output highlighting even if stdout is not a TTY.
`--noStackTrace` | Disables stack trace in test results output.
`--passWithNoTests`| Allows the test suite to pass when no files are found.
`--runInBand` | Run all tests serially in the current process.

### npm test:unit
>Unit tests configuration
 ```
npm test -- -c jest-unit-config.js --watch
 ```

### npm test:integration
>Integration tests configuration
```
npm test -- -c jest-integration-config.js --watch
```
 Flag | Meaning
------------ | -------------
`--c` | The path to a Jest config file specifying how to find and execute tests.
`--watch` | Watch files for changes and rerun tests related to changed files.

### npm test:staged
>Pre-commit test configuration
```
npm test -- --findRelatedTests --silent
```
 Flag | Meaning
------------ | -------------
`--findRelatedTests` | Useful for pre-commit hook integration to run the minimal amount of tests necessary.
`--silent` | Prevent tests from printing messages through the console.

### npm test:ci
> Pre-push test configuration
```
npm test -- --coverage --silent
```
 Flag | Meaning
------------ | -------------
`--covarage` |Indicates that test coverage information should be collected and reported in the output.
`--silent` | Prevent tests from printing messages through the console.

# tdd-and-clean-architecture
## package.json scripts
###  npm test
> Default jest configuration
 ```
 jest --colors --noStackTrace --passWithNoTests --silent
 ```
Flag | Meaning
------------ | -------------
`--colors` | Forces test results output highlighting even if stdout is not a TTY.
`--noStackTrace` | Disables stack trace in test results output.
`--passWithNoTests`| Allows the test suite to pass when no files are found.
`--silent` | Prevent tests from printing messages through the console.

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
npm test -- --findRelatedTests
```
 Flag | Meaning
------------ | -------------
`--findRelatedTests` | Useful for pre-commit hook integration to run the minimal amount of tests necessary.

### npm test:ci
> Pre-push test configuration
```
npm test -- --coverage
```
 Flag | Meaning
------------ | -------------
`--covarage` |Indicates that test coverage information should be collected and reported in the output.

const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')


module.exports = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
};

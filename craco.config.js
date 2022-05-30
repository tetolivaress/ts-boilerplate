const { CracoAliasPlugin } = require('react-app-alias')
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

const options = {} 

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options
    }
  ],
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
}

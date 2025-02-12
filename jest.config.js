module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/'
  }
};

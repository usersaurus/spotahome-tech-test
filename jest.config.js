module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/assets/css/__mocks__/styleMock.js',
  },
}

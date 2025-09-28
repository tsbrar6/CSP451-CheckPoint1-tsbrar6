module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageThreshold: {
    global: { lines: 80, statements: 80, branches: 50, functions: 80 },
  },
};
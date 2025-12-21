const { init, getVersion } = require('../src/index');

describe('Application Tests', () => {
  test('should initialize without errors', () => {
    expect(() => init()).not.toThrow();
  });

  test('should return correct version', () => {
    expect(getVersion()).toBe('1.1.0');
  });

  test('should return a string', () => {
    expect(typeof getVersion()).toBe('string');
  });
});

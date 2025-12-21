/**
 * Example tests for the application
 */

import { getVersion } from '../src/index.js';

describe('Application Tests', () => {
  test('should initialize without errors', () => {
    expect(() => {
      getVersion();
    }).not.toThrow();
  });

  test('should return a string', () => {
    const result = getVersion();
    expect(typeof result).toBe('string');
  });
});

const { multiply, divide } = require('../src/calculator');

describe('Calculator Tests', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('should throw error on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
});

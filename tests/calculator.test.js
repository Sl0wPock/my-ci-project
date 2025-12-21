/**
 * Calculator tests
 */

import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculator Tests', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('should multiply two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});

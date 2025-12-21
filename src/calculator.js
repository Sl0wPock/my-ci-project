/**
 * Калькулятор для  выполнения математических операций
 * @module calculator
 */

/**
 * Складывает два числа
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Сумма a и b
 */
export const add = (a, b) => a + b;

/**
 * Вычитает второе число из первого
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Разница a и b
 */
export const subtract = (a, b) => a - b;

/**
 * Умножает два числа
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Произведение a и b
 */
export const multiply = (a, b) => a * b;

/**
 * Делит первое число на второе
 * @param {number} a - Делимое
 * @param {number} b - Делитель
 * @returns {number} Результат деления a на b
 * @throws {Error} Если b равно 0
 */
export const divide = (a, b) => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
};

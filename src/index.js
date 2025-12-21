/**
 * Главный модуль приложения
 * @module index
 */

import { add, subtract, multiply, divide } from './calculator.js';

/**
 * Возвращает версию приложения
 * @returns {string} Версия приложения
 */
export const getVersion = () => '1.1.0';

/**
 * Экспортирует все функции калькулятора
 */
export { add, subtract, multiply, divide };

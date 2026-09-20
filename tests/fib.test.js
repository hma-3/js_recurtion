const { fib } = require('../src/fib');

describe('fib', () => {
  test('returns the base Fibonacci values', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
  });

  test('returns the correct Fibonacci number for small inputs', () => {
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
  });

  test('handles larger Fibonacci values', () => {
    expect(fib(10)).toBe(55);
    expect(fib(12)).toBe(144);
  });
});
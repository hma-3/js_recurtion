const { pow } = require('../src/pow');

describe('pow', () => {
  test('handles basic positive exponents', () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(3, 2)).toBe(9);
    expect(pow(10, 4)).toBe(10000);
  });

  test('handles negative bases', () => {
    expect(pow(-2, 3)).toBe(-8);
    expect(pow(-2, 4)).toBe(16);
    expect(pow(-3, 5)).toBe(-243);
  });

  test('handles zero exponent and zero base', () => {
    expect(pow(5, 0)).toBe(1);
    expect(pow(-3, 0)).toBe(1);
    expect(pow(0, 5)).toBe(0);
    expect(pow(0, 0)).toBe(1);
  });

  test('handles negative exponents', () => {
    expect(pow(2, -2)).toBeCloseTo(0.25);
    expect(pow(5, -2)).toBeCloseTo(0.04);
    expect(pow(2, -3)).toBeCloseTo(0.125);
  });

  test('handles floating point bases', () => {
    expect(pow(2.1, 3)).toBeCloseTo(9.261);
    expect(pow(1.5, 3)).toBeCloseTo(3.375);
    expect(pow(0.5, 4)).toBeCloseTo(0.0625);
  });

  test('handles large valid exponents', () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(3, 5)).toBe(243);
    expect(pow(2, 31)).toBe(2147483648);
  });
});
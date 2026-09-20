const { climbStairs } = require('../src/climbStairs');

describe('climbStairs', () => {
  test('returns 1 for zero or one step', () => {
    expect(climbStairs(0)).toBe(1);
    expect(climbStairs(1)).toBe(1);
  });

  test('returns the correct number of ways for small inputs', () => {
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
  });

  test('handles larger inputs correctly', () => {
    expect(climbStairs(10)).toBe(89);
    expect(climbStairs(12)).toBe(233);
  });
});
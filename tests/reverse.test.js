const { reverse } = require('../src/reverse');

describe('reverse', () => {
  test('reverses ordinary strings', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('world')).toBe('dlrow');
    expect(reverse('aabb')).toBe('bbaa');
  });

  test('handles empty and single-character strings', () => {
    expect(reverse('')).toBe('');
    expect(reverse('a')).toBe('a');
  });

  test('handles spaces and punctuation', () => {
    expect(reverse('Hello, World!')).toBe('!dlroW ,olleH');
    expect(reverse('  hi  ')).toBe('  ih  ');
  });
});
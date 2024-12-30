const reverseString = require('../js/reverseString');

test('handles an empty string', () => {
    expect(reverseString('')).toBe('');
})

test('Reverses the string Hello', () => {
    expect(reverseString('Hello')).toBe('olleH');
})

test('Ensures that spaces are caught', () => {
    expect(reverseString('He llo')).toBe('oll eH');
})
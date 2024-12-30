const capitalize = require('../js/capitalize');

test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('handles an empty string', () => {
    expect(capitalize('')).toBe('');
});
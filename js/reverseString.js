function reverseString(string) {
    if (!string) {return ''}
    let reverseString = '';
    for (let i = 1; i < string.length + 1; i++) {
        reverseString += string.charAt(string.length - i);
    }

    return reverseString;
}

module.exports = reverseString;
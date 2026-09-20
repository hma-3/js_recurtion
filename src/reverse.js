/**
 * Reverses a given string.
 * @param {string} value - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverse(value) {
    const reversed = [];

    for (let index = value.length - 1; index >= 0; index--) {
        reversed.push(value[index]);
    }

    return reversed.join('');
}

module.exports = { reverse };
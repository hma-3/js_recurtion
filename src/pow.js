/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function pow(x, n) {
    if (n === 0) {
        return 1;
    }

    if (x === 0) {
        return n < 0 ? Infinity : 0;
    }

    let result = 1;
    let base = x;
    let exponent = Math.abs(n);

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result *= base;
        }

        base *= base;
        exponent = Math.floor(exponent / 2);
    }

    return n < 0 ? 1 / result : result;
}

module.exports = { pow };
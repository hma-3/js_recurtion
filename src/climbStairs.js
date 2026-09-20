/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 1) {
        return 1;
    }

    let first = 1;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        const current = first + second;
        first = second;
        second = current;
    }

    return second;
}

module.exports = { climbStairs };
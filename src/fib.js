/**
 * Function to calculate the n-th Fibonacci number iteratively.
 * @param {number} n - The position of the Fibonacci number to calculate
 * @return {number} - The n-th Fibonacci number
 */
function fib(n) {
    let first = 0;
    let second = 1;

    for (let i = 1; i <= n; i++) {
        const next = first + second;
        first = second;
        second = next;
    }

    return first;
}

module.exports = { fib };
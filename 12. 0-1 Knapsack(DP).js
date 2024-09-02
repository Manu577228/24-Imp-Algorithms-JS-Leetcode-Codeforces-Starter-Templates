/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * 0/1 Knapsack Algorithm
 * @param {number[]} weights - Array of weights of the items.
 * @param {number[]} values - Array of values of the items.
 * @param {number} capacity - The maximum weight capacity of the knapsack.
 * @returns {number} - The maximum value that can be achieved with the given capacity.
 */
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Example Usage
const weights = [1, 2, 3, 8, 7, 4];
const values = [20, 5, 10, 40, 15, 25];
const capacity = 10;
const result = knapsack(weights, values, capacity);

console.log(`Maximum value that can be achieved: ${result}`); // Output: Maximum value that can be achieved: 60

/* Explanation:
 * Time Complexity: O(N * W) where N is the number of items and W is the capacity of the knapsack.
 * Space Complexity: O(N * W) for the dynamic programming table.
 * The 0/1 Knapsack algorithm is used to find the maximum value that can be obtained by selecting items without exceeding the knapsack's capacity.
 */

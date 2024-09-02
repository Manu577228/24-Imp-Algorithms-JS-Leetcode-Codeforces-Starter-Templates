/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * Greedy Algorithm for Coin Change Problem
 * @param {number[]} coins - Array of coin denominations.
 * @param {number} amount - The total amount of money to change.
 * @returns {number} - The minimum number of coins needed to make up the amount, or -1 if not possible.
 */
function coinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Sort coins in descending order
    let numCoins = 0;
    for (const coin of coins) {
        if (amount === 0) break;
        numCoins += Math.floor(amount / coin);
        amount %= coin;
    }
    return amount === 0 ? numCoins : -1;
}

// Example Usage
const coins = [1, 5, 10, 25];
const amount = 27;
const result = coinChange(coins, amount);

console.log(`Minimum number of coins needed: ${result}`); // Output: Minimum number of coins needed: 4

/* Explanation:
 * Time Complexity: O(N log N) where N is the number of coin denominations due to sorting.
 * Space Complexity: O(1) as we're using a constant amount of extra space.
 * The greedy algorithm is used here to minimize the number of coins needed to make up a given amount by always choosing the largest denomination possible.
 */

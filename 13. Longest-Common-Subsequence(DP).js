/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * Longest Common Subsequence (LCS) Algorithm
 * @param {string} text1 - First string.
 * @param {string} text2 - Second string.
 * @returns {number} - The length of the longest common subsequence.
 */
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// Example Usage
const text1 = "abcde";
const text2 = "ace";
const result = longestCommonSubsequence(text1, text2);

console.log(`Length of Longest Common Subsequence: ${result}`); // Output: Length of Longest Common Subsequence: 3

/* Explanation:
 * Time Complexity: O(M * N) where M and N are the lengths of the two strings.
 * Space Complexity: O(M * N) for the dynamic programming table.
 * The Longest Common Subsequence algorithm is used to find the longest subsequence common to both sequences, where subsequence is a sequence that appears in the same order in both strings but not necessarily contiguously.
 */

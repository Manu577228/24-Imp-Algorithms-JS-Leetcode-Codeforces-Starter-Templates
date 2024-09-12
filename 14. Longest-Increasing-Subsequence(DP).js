/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff ) 				                                     
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Portfolio:https://manu-bharadwaj-portfolio.vercel.app/  */
/* ----------------------------------------------------------- */

/**
 * Longest Increasing Subsequence (LIS) Algorithm
 * @param {number[]} nums - Array of integers.
 * @returns {number} - The length of the longest increasing subsequence.
 */
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example Usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = lengthOfLIS(nums);

console.log(`Length of Longest Increasing Subsequence: ${result}`); // Output: Length of Longest Increasing Subsequence: 4

/* Explanation:
 * Time Complexity: O(N^2) where N is the length of the input array.
 * Space Complexity: O(N) for the dynamic programming table.
 * The Longest Increasing Subsequence algorithm is used to find the length of the longest subsequence in an array where the elements are strictly increasing.
 */

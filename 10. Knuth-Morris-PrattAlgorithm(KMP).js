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
 * Knuth-Morris-Pratt (KMP) Algorithm for Pattern Matching
 * @param {string} text - The text to search within.
 * @param {string} pattern - The pattern to search for.
 * @returns {number} - The starting index of the first occurrence of the pattern in the text, or -1 if not found.
 */
function KMP(text, pattern) {
    const lps = computeLPSArray(pattern);
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            return i - j; // Pattern found at index (i - j)
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // Pattern not found
}

/**
 * Compute the Longest Prefix Suffix (LPS) array for the pattern.
 * @param {string} pattern - The pattern for which to compute the LPS array.
 * @returns {number[]} - The LPS array.
 */
function computeLPSArray(pattern) {
    const lps = Array(pattern.length).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// Example Usage
const text = "ababcababcabcabc";
const pattern = "abcabc";
const result = KMP(text, pattern);

console.log(`Pattern found at index: ${result}`); // Output: Pattern found at index: 8

/* Explanation:
 * Time Complexity: O(N + M) where N is the length of the text and M is the length of the pattern.
 * Space Complexity: O(M) for storing the LPS array.
 * The KMP algorithm is used for pattern matching where it efficiently searches for occurrences of a pattern within a text.
 */

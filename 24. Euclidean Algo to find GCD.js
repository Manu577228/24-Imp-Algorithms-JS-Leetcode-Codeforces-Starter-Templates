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
 * Euclidean Algorithm for finding the Greatest Common Divisor (GCD)
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - GCD of a and b.
 */
function euclideanAlgorithm(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

// Example Usage
const num1 = 56;
const num2 = 98;

const gcd = euclideanAlgorithm(num1, num2);

console.log(`GCD of ${num1} and ${num2} is:`, gcd);
// Output: GCD of 56 and 98 is: 14

// Explanation:
/*
 * Time Complexity: O(log(min(a, b))) where a and b are the input numbers.
 * Space Complexity: O(1) as it uses constant space.
 * The Euclidean Algorithm finds the greatest common divisor by repeatedly replacing
 * the larger number with the remainder of the division of the two numbers, until one of them becomes zero.
 */

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

// Radix Sort Implementation in JavaScript

function radixSort(arr) {
    const max = Math.max(...arr);  // Find the maximum number to determine the number of digits
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(arr, exp);
        exp *= 10;  // Move to the next digit
    }
}

function countingSortByDigit(arr, exp) {
    const output = new Array(arr.length).fill(0);  // Output array
    const count = new Array(10).fill(0);  // Initialize count array for digits 0-9

    // Store the count of occurrences of each digit
    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Change count[i] to represent the position in output array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using the count array
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy the sorted elements for this digit back to the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Example usage:
const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array:", array);

radixSort(array);
console.log("Sorted Array:", array);

/* 
Explanation:
1. The `radixSort` function sorts the input array using the Radix Sort algorithm.
2. It sorts the elements digit by digit, starting from the least significant digit to the most significant digit.
3. For each digit, it uses a stable counting sort (`countingSortByDigit`) to sort based on the current digit.

Time Complexity (TC): O(d * (n + k))
- Where it is used: The time complexity is O(d * (n + k)), where `d` is the number of digits in the largest number, `n` is the number of elements, and `k` is the range of digits (which is 10 for base 10 numbers).

Space Complexity (SC): O(n + k)
- Where it is used: The space complexity is O(n + k) due to the use of the count array (size `k`) and output array (size `n`) for each digit sorting pass.
*/

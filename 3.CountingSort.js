/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

// Counting Sort Implementation in JavaScript

function countingSort(arr) {
    const max = Math.max(...arr);  // Find the maximum value in the array
    const min = Math.min(...arr);  // Find the minimum value in the array
    const range = max - min + 1;   // Calculate the range of the elements
    const count = new Array(range).fill(0);  // Initialize the count array
    const output = new Array(arr.length).fill(0);  // Initialize the output array

    // Store the count of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Change count[i] so that count[i] contains the actual
    // position of this element in the output array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using the count array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    // Copy the sorted elements into the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Example usage:
const array = [4, 2, 2, 8, 3, 3, 1];
console.log("Original Array:", array);

countingSort(array);
console.log("Sorted Array:", array);

/* 
Explanation:
1. The `countingSort` function sorts the input array using the Counting Sort algorithm.
2. It first finds the maximum and minimum values to determine the range of the input.
3. A count array is created to store the frequency of each element, and then it is modified to reflect the actual positions of elements in the sorted order.
4. Finally, the output array is built using the count array, and the sorted elements are copied back to the original array.

Time Complexity (TC): O(n + k)
- Where it is used: This TC occurs because we iterate through the input array (O(n)) and the count array (O(k)).

Space Complexity (SC): O(n + k)
- Where it is used: This SC occurs due to the additional space used by the count and output arrays, both of size `n` and `k`, where `k` is the range of input values.
*/

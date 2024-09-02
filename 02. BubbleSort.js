/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

// Bubble Sort Implementation in JavaScript

function bubbleSort(arr) {
    const n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already sorted, no need to check them
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if the element found is greater than the next element
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", array);

bubbleSort(array);
console.log("Sorted Array:", array);

/* 
Explanation:
1. The `bubbleSort` function sorts the input array using the Bubble Sort algorithm.
2. It iterates over the array multiple times, comparing adjacent elements and swapping them if they are in the wrong order.
3. Each pass pushes the largest unsorted element to its correct position, like "bubbling" to the top.
4. This process continues until the array is completely sorted.

Time Complexity (TC): O(n^2)
- Where it is used: This TC occurs in the worst-case scenario when the array is sorted in reverse order. It occurs due to the nested loops that iterate over the array.

Space Complexity (SC): O(1)
- Where it is used: This SC is constant as the sorting is done in-place, requiring no extra space except for a few variables for indexing and swapping.
*/

/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

// Quick Sort Implementation in JavaScript

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        const pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];  // Pivot element
    let i = low - 1;  // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap the pivot element with the element at i+1 position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;  // Return the partitioning index
}

// Example usage:
const array = [10, 7, 8, 9, 1, 5];
console.log("Original Array:", array);

quickSort(array);
console.log("Sorted Array:", array);

/* 
Explanation:
1. The `quickSort` function sorts the input array using the Quick Sort algorithm.
2. The array is partitioned into two halves based on a pivot element. Elements smaller than the pivot are placed to its left, and larger elements to its right.
3. The process is recursively applied to the sub-arrays on the left and right of the pivot until the entire array is sorted.

Time Complexity (TC): O(n log n) on average, O(n^2) in the worst case
- Where it is used: The average case of O(n log n) occurs when the pivot divides the array roughly in half, while the worst-case O(n^2) occurs when the pivot results in highly unbalanced partitions.

Space Complexity (SC): O(log n) due to the recursion stack
- Where it is used: The SC of O(log n) is used in the call stack during the recursive partitioning of the array.
*/

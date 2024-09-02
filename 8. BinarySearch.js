/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

// Binary Search Implementation in JavaScript

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);  // Calculate the middle index

        if (arr[mid] === target) {
            return mid;  // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1;  // Target is in the right half
        } else {
            right = mid - 1;  // Target is in the left half
        }
    }

    return -1;  // Target not found in the array
}

// Example usage:
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const index = binarySearch(array, target);

console.log("Sorted Array:", array);
console.log(`Target ${target} found at index:`, index);

/* 
Explanation:
1. The `binarySearch` function works by repeatedly dividing the sorted array into halves.
2. It compares the target with the middle element to decide whether to continue the search in the left or right half.
3. If the target is found, it returns the index of the target.
4. If the search space is exhausted without finding the target, it returns -1.

Time Complexity (TC): O(log n)
- Where it is used: The time complexity is O(log n) because with each step, the search space is reduced by half.

Space Complexity (SC): O(1)
- Where it is used: The space complexity is O(1) because the algorithm uses a constant amount of additional space.
*/

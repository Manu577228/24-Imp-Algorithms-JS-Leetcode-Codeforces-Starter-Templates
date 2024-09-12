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

// Merge Sort Implementation in JavaScript

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;  // Base case: single element is already sorted
    }

    const mid = Math.floor(arr.length / 2);  // Find the middle point
    const left = mergeSort(arr.slice(0, mid));  // Sort the left half
    const right = mergeSort(arr.slice(mid));    // Sort the right half

    return merge(left, right);  // Merge the sorted halves
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    // Merge the two sorted arrays into one sorted array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in left or right, append them
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);

const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);

/* 
Explanation:
1. The `mergeSort` function sorts the input array using the Merge Sort algorithm.
2. The array is recursively split into two halves until each subarray contains a single element.
3. These subarrays are then merged back together in sorted order using the `merge` function.

Time Complexity (TC): O(n log n)
- Where it is used: The O(n log n) complexity comes from the process of dividing the array into halves (log n) and merging them (n).

Space Complexity (SC): O(n)
- Where it is used: The O(n) space is used because the merge process requires additional space to store the temporary arrays during the merging phase.
*/

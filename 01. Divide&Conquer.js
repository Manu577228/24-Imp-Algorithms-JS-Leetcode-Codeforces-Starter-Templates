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
 * Merge Sort Algorithm - Divide and Conquer approach
 * 
 * The merge sort algorithm divides the array into two halves,
 * recursively sorts each half, and then merges the sorted halves.
 */

function mergeSort(arr) {
    // Base case: an array of zero or one elements is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort each half and merge the sorted halves
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge two sorted arrays into one sorted array
 * @param {number[]} left - The left sorted array
 * @param {number[]} right - The right sorted array
 * @returns {number[]} - The merged sorted array
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays while there are elements in both
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left array, add them
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in the right array, add them
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage:
const exampleArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", exampleArray);

const sortedArray = mergeSort(exampleArray);
console.log("Sorted Array:", sortedArray);

/*
 * Explanation:
 * 
 * 1. The `mergeSort` function divides the array into two halves until arrays of size one or zero are obtained.
 * 2. The `merge` function combines two sorted arrays into one sorted array.
 * 3. The example usage demonstrates sorting an array [38, 27, 43, 3, 9, 82, 10].
 * 
 * The divide and conquer strategy allows us to break down the problem (sorting an array) into smaller, more manageable sub-problems
 * and then combine the results of those sub-problems to solve the original problem efficiently.
 */

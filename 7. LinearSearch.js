/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

// Linear Search Implementation in JavaScript

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Return the index of the target if found
        }
    }
    return -1;  // Return -1 if the target is not found in the array
}

// Example usage:
const array = [34, 78, 19, 5, 87, 53];
const target = 87;
const index = linearSearch(array, target);

console.log("Array:", array);
console.log(`Target ${target} found at index:`, index);

/* 
Explanation:
1. The `linearSearch` function iterates through each element of the array to find the target value.
2. If the target is found, it returns the index of the target.
3. If the target is not found after checking all elements, it returns -1.

Time Complexity (TC): O(n)
- Where it is used: The time complexity is O(n) because in the worst case, we may need to check every element in the array.

Space Complexity (SC): O(1)
- Where it is used: The space complexity is O(1) because we are only using a constant amount of extra space, regardless of the input size.
*/

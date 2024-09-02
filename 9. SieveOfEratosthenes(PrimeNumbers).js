/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

// Sieve of Eratosthenes Implementation in JavaScript

function sieveOfEratosthenes(n) {
    const primes = new Array(n + 1).fill(true);  // Initialize an array to keep track of prime numbers
    primes[0] = primes[1] = false;  // 0 and 1 are not prime numbers

    for (let i = 2; i * i <= n; i++) {  // Start from the first prime number, 2
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {  // Mark multiples of i as non-prime
                primes[j] = false;
            }
        }
    }

    const result = [];
    for (let i = 2; i <= n; i++) {  // Collect all prime numbers
        if (primes[i]) {
            result.push(i);
        }
    }
    return result;  // Return the list of prime numbers
}

// Example usage:
const n = 30;
const primeNumbers = sieveOfEratosthenes(n);

console.log(`Prime numbers up to ${n}:`, primeNumbers);

/* 
Explanation:
1. The `sieveOfEratosthenes` function initializes a boolean array `primes` of size n+1.
2. It marks all numbers as prime (true) except 0 and 1.
3. It iterates through the numbers starting from 2, and for each prime number, marks all its multiples as non-prime.
4. Finally, it collects and returns all the indices that are still marked as prime.

Time Complexity (TC): O(n log log n)
- Where it is used: The time complexity is O(n log log n) because the algorithm efficiently marks non-prime numbers.

Space Complexity (SC): O(n)
- Where it is used: The space complexity is O(n) because the algorithm requires a boolean array of size n+1 to keep track of prime numbers.
*/

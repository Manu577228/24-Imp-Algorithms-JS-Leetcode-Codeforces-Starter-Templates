/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readline() {
    return inputString[currentLine++];
}

function updateFenwickTree(bit, n, index, value) {
    index++;
    while (index <= n) {
        bit[index] += value;
        index += index & (-index);
    }
}

function queryFenwickTree(bit, index) {
    let sum = 0;
    index++;
    while (index > 0) {
        sum += bit[index];
        index -= index & (-index);
    }
    return sum;
}

function main() {
    let n = +(readline());
    let arr = readline().split(' ').map(Number);
    let bit = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        updateFenwickTree(bit, n, i, arr[i]);
    }
    let q = +(readline());
    while (q--) {
        let [type, idx, val] = readline().split(' ').map(Number);
        if (type === 1) {
            updateFenwickTree(bit, n, idx, val);
        } else {
            console.log(queryFenwickTree(bit, idx));
        }
    }
}

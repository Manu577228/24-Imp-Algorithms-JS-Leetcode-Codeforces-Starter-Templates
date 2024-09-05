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

function buildSegmentTree(arr, segTree, left, right, pos) {
    if (left === right) {
        segTree[pos] = arr[left];
        return;
    }
    const mid = Math.floor((left + right) / 2);
    buildSegmentTree(arr, segTree, left, mid, 2 * pos + 1);
    buildSegmentTree(arr, segTree, mid + 1, right, 2 * pos + 2);
    segTree[pos] = Math.min(segTree[2 * pos + 1], segTree[2 * pos + 2]);
}

function rangeQuery(segTree, qlow, qhigh, left, right, pos) {
    if (qlow <= left && qhigh >= right) {
        return segTree[pos];
    }
    if (qlow > right || qhigh < left) {
        return Infinity;
    }
    const mid = Math.floor((left + right) / 2);
    return Math.min(rangeQuery(segTree, qlow, qhigh, left, mid, 2 * pos + 1),
                    rangeQuery(segTree, qlow, qhigh, mid + 1, right, 2 * pos + 2));
}

function main() {
    let n = +(readline());
    let arr = readline().split(' ').map(Number);
    let segTree = new Array(4 * n).fill(Infinity);
    buildSegmentTree(arr, segTree, 0, n - 1, 0);
    let q = +(readline());
    while (q--) {
        let [l, r] = readline().split(' ').map(Number);
        console.log(rangeQuery(segTree, l, r, 0, n - 1, 0));
    }
}

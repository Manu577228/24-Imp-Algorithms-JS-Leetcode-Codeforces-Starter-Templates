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

function buildLazySegmentTree(arr, segTree, lazy, left, right, pos) {
    if (left === right) {
        segTree[pos] = arr[left];
        return;
    }
    const mid = Math.floor((left + right) / 2);
    buildLazySegmentTree(arr, segTree, lazy, left, mid, 2 * pos + 1);
    buildLazySegmentTree(arr, segTree, lazy, mid + 1, right, 2 * pos + 2);
    segTree[pos] = Math.min(segTree[2 * pos + 1], segTree[2 * pos + 2]);
}

function updateRangeLazy(segTree, lazy, qlow, qhigh, delta, left, right, pos) {
    if (left > right) return;

    if (lazy[pos] !== 0) {
        segTree[pos] += lazy[pos];
        if (left !== right) {
            lazy[2 * pos + 1] += lazy[pos];
            lazy[2 * pos + 2] += lazy[pos];
        }
        lazy[pos] = 0;
    }

    if (qlow > right || qhigh < left) return;

    if (qlow <= left && qhigh >= right) {
        segTree[pos] += delta;
        if (left !== right) {
            lazy[2 * pos + 1] += delta;
            lazy[2 * pos + 2] += delta;
        }
        return;
    }

    const mid = Math.floor((left + right) / 2);
    updateRangeLazy(segTree, lazy, qlow, qhigh, delta, left, mid, 2 * pos + 1);
    updateRangeLazy(segTree, lazy, qlow, qhigh, delta, mid + 1, right, 2 * pos + 2);
    segTree[pos] = Math.min(segTree[2 * pos + 1], segTree[2 * pos + 2]);
}

function main() {
    let n = +(readline());
    let arr = readline().split(' ').map(Number);
    let segTree = new Array(4 * n).fill(Infinity);
    let lazy = new Array(4 * n).fill(0);
    buildLazySegmentTree(arr, segTree, lazy, 0, n - 1, 0);
    let q = +(readline());
    while (q--) {
        let [type, l, r, val] = readline().split(' ').map(Number);
        if (type === 1) {
            updateRangeLazy(segTree, lazy, l, r, val, 0, n - 1, 0);
        }
        console.log(rangeQueryLazy(segTree, lazy, l, r, 0, n - 1, 0));
    }
}

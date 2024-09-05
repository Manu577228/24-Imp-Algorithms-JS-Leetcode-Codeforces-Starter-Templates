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

class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown(0);
        return max;
    }

    _bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _sinkDown(index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this._sinkDown(largest);
        }
    }
}

function main() {
    const maxPQ = new MaxPriorityQueue();
    let n = +(readline());
    while (n--) {
        let [type, val] = readline().split(' ').map(Number);
        if (type === 1) {
            maxPQ.insert(val);
        } else {
            console.log(maxPQ.extractMax());
        }
    }
}

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

class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown(0);
        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _sinkDown(index) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._sinkDown(smallest);
        }
    }
}

function main() {
    const minPQ = new MinPriorityQueue();
    let n = +(readline());
    while (n--) {
        let [type, val] = readline().split(' ').map(Number);
        if (type === 1) {
            minPQ.insert(val);
        } else {
            console.log(minPQ.extractMin());
        }
    }
}

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

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    sinkDown(index) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
        if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.sinkDown(smallest);
        }
    }
}

function dijkstra(graph, source) {
    let distances = Array(graph.length).fill(Infinity);
    let minHeap = new MinHeap();
    distances[source] = 0;
    minHeap.insert([0, source]);

    while (minHeap.heap.length) {
        let [currentDist, u] = minHeap.extractMin();
        if (currentDist > distances[u]) continue;

        for (let [v, weight] of graph[u]) {
            let distance = currentDist + weight;
            if (distance < distances[v]) {
                distances[v] = distance;
                minHeap.insert([distance, v]);
            }
        }
    }
    return distances;
}

function main() {
    let n = +(readline());
    let m = +(readline());
    let graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < m; i++) {
        let [u, v, w] = readline().split(' ').map(Number);
        graph[u].push([v, w]);
        graph[v].push([u, w]);  // If the graph is undirected
    }
    let source = +(readline());
    console.log(dijkstra(graph, source));
}

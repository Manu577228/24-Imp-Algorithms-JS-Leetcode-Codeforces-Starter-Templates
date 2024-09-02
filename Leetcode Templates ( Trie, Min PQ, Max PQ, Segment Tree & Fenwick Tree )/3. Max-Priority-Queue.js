/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return max;
    }

    _heapifyUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index] > this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            this._heapifyUp(parent);
        }
    }

    _heapifyDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this._heapifyDown(largest);
        }
    }
}

/* Time Complexity (TC): O(log n) for insert and extractMax. */
/* Space Complexity (SC): O(n) where n is the number of elements. */
/* Used in: Task scheduling, event management. */

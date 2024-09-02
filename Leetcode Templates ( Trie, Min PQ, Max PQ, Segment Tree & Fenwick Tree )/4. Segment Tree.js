/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

class SegmentTree {
    constructor(data) {
        this.n = data.length;
        this.tree = new Array(4 * this.n);
        this.build(data, 0, 0, this.n - 1);
    }

    build(data, node, start, end) {
        if (start === end) {
            this.tree[node] = data[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(data, 2 * node + 1, start, mid);
            this.build(data, 2 * node + 2, mid + 1, end);
            this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
        }
    }

    update(index, value, node = 0, start = 0, end = this.n - 1) {
        if (start === end) {
            this.tree[node] = value;
        } else {
            const mid = Math.floor((start + end) / 2);
            if (start <= index && index <= mid) {
                this.update(index, value, 2 * node + 1, start, mid);
            } else {
                this.update(index, value, 2 * node + 2, mid + 1, end);
            }
            this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
        }
    }

    query(l, r, node = 0, start = 0, end = this.n - 1) {
        if (r < start || end < l) {
            return Infinity;
        }
        if (l <= start && end <= r) {
            return this.tree[node];
        }
        const mid = Math.floor((start + end) / 2);
        const leftQuery = this.query(l, r, 2 * node + 1, start, mid);
        const rightQuery = this.query(l, r, 2 * node + 2, mid + 1, end);
        return Math.min(leftQuery, rightQuery);
    }
}

/* Time Complexity (TC): O(log n) for update and query. */
/* Space Complexity (SC): O(n) where n is the number of elements. */
/* Used in: Range queries, interval queries. */

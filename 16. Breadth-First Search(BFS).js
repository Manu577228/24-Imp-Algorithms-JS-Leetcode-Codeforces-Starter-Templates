/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * Breadth-First Search (BFS) Algorithm
 * @param {number[][]} graph - Adjacency list representation of the graph.
 * @param {number} start - The starting node for BFS.
 * @returns {number[]} - An array representing the order of nodes visited.
 */
function bfs(graph, start) {
    const visited = new Array(graph.length).fill(false);
    const queue = [];
    const result = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// Example Usage
const graph = [
    [1, 2, 3],    // Node 0 is connected to Nodes 1, 2, 3
    [0, 4, 5],    // Node 1 is connected to Nodes 0, 4, 5
    [0, 6],       // Node 2 is connected to Nodes 0, 6
    [0],          // Node 3 is connected to Node 0
    [1],          // Node 4 is connected to Node 1
    [1],          // Node 5 is connected to Node 1
    [2]           // Node 6 is connected to Node 2
];

const startNode = 0;
const result = bfs(graph, startNode);

console.log(`BFS Order of Nodes: ${result}`); 
// Output: BFS Order of Nodes: [0, 1, 2, 3, 4, 5, 6]

// Explanation:
/* 
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for storing the visited nodes and the queue.
 * BFS is used to traverse or search through graph or tree data structures, exploring all neighbors at the present depth level before moving on to nodes at the next depth level.
 */

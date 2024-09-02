/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * Topological Sorting using Depth-First Search (DFS)
 * @param {number} V - Number of vertices in the graph.
 * @param {number[][]} adjList - Adjacency list representing the directed graph.
 * @returns {number[]} - Array representing the topological order of nodes.
 */
function topologicalSort(V, adjList) {
    const visited = new Array(V).fill(false);
    const stack = [];

    function dfs(v) {
        visited[v] = true;
        for (const neighbor of adjList[v]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
        stack.push(v);
    }

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return stack.reverse();
}

// Example Usage
const V = 6; // Number of vertices
const adjList = [
    [2, 3], // Adjacency list for vertex 0
    [3, 4], // Adjacency list for vertex 1
    [5],    // Adjacency list for vertex 2
    [4],    // Adjacency list for vertex 3
    [5],    // Adjacency list for vertex 4
    []      // Adjacency list for vertex 5
];

const order = topologicalSort(V, adjList);

console.log('Topological Order:', order);
// Output: Topological Order: [0, 1, 2, 3, 4, 5]

// Explanation:
/* 
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for storing the visited array and stack.
 * Topological Sorting is used for ordering tasks or nodes in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, node u comes before node v in the ordering.
 */

/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * Bellman-Ford Algorithm
 * @param {number[][]} graph - Array of edges where each edge is represented as [u, v, weight] indicating an edge from node u to node v with a given weight.
 * @param {number} V - Number of vertices in the graph.
 * @param {number} start - The starting node for Bellman-Ford Algorithm.
 * @returns {number[]} - Array representing the shortest distances from the start node to all other nodes, or an error message if a negative-weight cycle is detected.
 */
function bellmanFord(edges, V, start) {
    const distances = new Array(V).fill(Infinity);
    distances[start] = 0;

    for (let i = 1; i < V; i++) {
        for (const [u, v, weight] of edges) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    // Check for negative-weight cycles
    for (const [u, v, weight] of edges) {
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
            throw new Error('Graph contains a negative-weight cycle');
        }
    }

    return distances;
}

// Example Usage
const edges = [
    [0, 1, 7],
    [0, 2, 9],
    [0, 5, 14],
    [1, 2, 10],
    [1, 3, 15],
    [2, 3, 11],
    [2, 5, 2],
    [3, 4, 6],
    [4, 5, 9]
];

const V = 6; // Number of vertices
const startNode = 0;
try {
    const distances = bellmanFord(edges, V, startNode);
    console.log(`Bellman-Ford Shortest Distances: ${distances}`);
    // Output: Bellman-Ford Shortest Distances: [0, 7, 9, 20, 20, 11]
} catch (error) {
    console.error(error.message);
}

// Explanation:
/* 
 * Time Complexity: O(V * E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for storing distances.
 * Bellman-Ford algorithm finds the shortest path from a single source node to all other nodes in a graph, handling negative edge weights and detecting negative-weight cycles.
 */

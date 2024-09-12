/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff ) 				                                     
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Portfolio:https://manu-bharadwaj-portfolio.vercel.app/  */
/* ----------------------------------------------------------- */

/**
 * Dijkstra's Algorithm
 * @param {number[][]} graph - 2D array representing the adjacency matrix of the graph where graph[i][j] is the weight of the edge from node i to node j.
 * @param {number} start - The starting node for Dijkstra's Algorithm.
 * @returns {number[]} - Array representing the shortest distances from the start node to all other nodes.
 */
function dijkstra(graph, start) {
    const n = graph.length;
    const distances = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    distances[start] = 0;

    for (let i = 0; i < n - 1; i++) {
        let minDistance = Infinity;
        let u = -1;

        for (let j = 0; j < n; j++) {
            if (!visited[j] && distances[j] < minDistance) {
                minDistance = distances[j];
                u = j;
            }
        }

        if (u === -1) break; // No more nodes to process

        visited[u] = true;

        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== Infinity && !visited[v]) {
                const newDist = distances[u] + graph[u][v];
                if (newDist < distances[v]) {
                    distances[v] = newDist;
                }
            }
        }
    }

    return distances;
}

// Example Usage
const graph = [
    [0, 7, 9, Infinity, Infinity, 14],
    [7, 0, 10, 15, Infinity, Infinity],
    [9, 10, 0, 11, Infinity, 2],
    [Infinity, 15, 11, 0, 6, Infinity],
    [Infinity, Infinity, Infinity, 6, 0, 9],
    [14, Infinity, 2, Infinity, 9, 0]
];

const startNode = 0;
const distances = dijkstra(graph, startNode);

console.log(`Dijkstra's Shortest Distances: ${distances}`); 
// Output: Dijkstra's Shortest Distances: [0, 7, 9, 20, 20, 11]

// Explanation:
/* 
 * Time Complexity: O(V^2) for adjacency matrix representation.
 * Space Complexity: O(V) for storing distances and visited nodes.
 * Dijkstra's algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights.
 */

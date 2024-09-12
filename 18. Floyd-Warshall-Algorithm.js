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
 * Floyd-Warshall Algorithm
 * @param {number[][]} graph - 2D array representing the adjacency matrix of the graph where graph[i][j] is the weight of the edge from node i to node j.
 * @returns {number[][]} - 2D array representing the shortest distances between all pairs of nodes.
 */
function floydWarshall(graph) {
    const n = graph.length;
    const dist = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => graph[i][j]));

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

// Example Usage
const graph = [
    [0, 3, Infinity, Infinity, Infinity],
    [2, 0, Infinity, Infinity, Infinity],
    [Infinity, 7, 0, 1, Infinity],
    [6, Infinity, Infinity, 0, 2],
    [Infinity, 3, Infinity, Infinity, 0]
];

const shortestPaths = floydWarshall(graph);

console.log('Shortest Path Matrix:');
shortestPaths.forEach(row => console.log(row));

// Explanation:
/* 
 * Time Complexity: O(V^3) where V is the number of vertices in the graph.
 * Space Complexity: O(V^2) for storing the distance matrix.
 * The Floyd-Warshall algorithm finds the shortest paths between all pairs of nodes in a weighted graph and is used in applications requiring all-pairs shortest path computations.
 */

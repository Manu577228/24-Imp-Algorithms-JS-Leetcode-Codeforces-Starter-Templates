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
 * Depth-First Search (DFS) - Recursive Version
 * @param {number} V - Number of vertices in the graph.
 * @param {number[][]} adjList - Adjacency list representing the graph.
 * @returns {boolean[]} - Array where each index i is true if vertex i was visited.
 */
function dfsRecursive(V, adjList) {
    const visited = new Array(V).fill(false);

    function dfs(v) {
        visited[v] = true;
        console.log("Visiting node:", v);

        for (const neighbor of adjList[v]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // Call DFS for every unvisited node (for disconnected graphs)
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return visited;
}

// Example Usage
const V = 5;
const adjList = [
    [1, 2],  // Adjacency list for vertex 0
    [2],     // Adjacency list for vertex 1
    [0, 3],  // Adjacency list for vertex 2
    [4],     // Adjacency list for vertex 3
    []       // Adjacency list for vertex 4
];

const visited = dfsRecursive(V, adjList);

console.log('Visited Nodes:', visited);
// Output:
// Visiting node: 0
// Visiting node: 1
// Visiting node: 2
// Visiting node: 3
// Visiting node: 4
// Visited Nodes: [ true, true, true, true, true ]

// Explanation:
/*
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for the visited array and recursion stack (in worst case, O(V) depth).
 */

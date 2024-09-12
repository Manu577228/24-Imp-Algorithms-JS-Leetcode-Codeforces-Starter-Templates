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
 * Depth-First Search (DFS) Algorithm
 * @param {number[][]} graph - Adjacency list representation of the graph.
 * @param {number} start - The starting node for DFS.
 * @returns {number[]} - An array representing the order of nodes visited.
 */
function dfs(graph, start) {
    const visited = new Array(graph.length).fill(false);
    const result = [];

    function explore(node) {
        if (visited[node]) return;
        visited[node] = true;
        result.push(node);

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                explore(neighbor);
            }
        }
    }

    explore(start);
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
const result = dfs(graph, startNode);

console.log(`DFS Order of Nodes: ${result}`); 
// Output: DFS Order of Nodes: [0, 1, 4, 5, 2, 6, 3]

// Explanation:
/* 
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for storing the visited nodes and the recursion stack.
 * DFS is used to traverse or search through graph or tree data structures, exploring as far as possible along each branch before backtracking.
 */

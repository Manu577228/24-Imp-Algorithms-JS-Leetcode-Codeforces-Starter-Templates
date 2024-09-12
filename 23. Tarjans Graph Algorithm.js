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
 * Tarjan's Algorithm for finding Strongly Connected Components (SCC)
 * @param {number} V - Number of vertices in the graph.
 * @param {number[][]} adjList - Adjacency list representing the directed graph.
 * @returns {number[][]} - Array of SCCs where each SCC is a list of vertices.
 */
function tarjansAlgorithm(V, adjList) {
    let time = 0;
    const discoveryTime = new Array(V).fill(-1);
    const low = new Array(V).fill(-1);
    const stack = [];
    const onStack = new Array(V).fill(false);
    const sccList = [];

    function dfs(v) {
        discoveryTime[v] = low[v] = time++;
        stack.push(v);
        onStack[v] = true;

        for (const neighbor of adjList[v]) {
            if (discoveryTime[neighbor] === -1) {
                dfs(neighbor);
                low[v] = Math.min(low[v], low[neighbor]);
            } else if (onStack[neighbor]) {
                low[v] = Math.min(low[v], discoveryTime[neighbor]);
            }
        }

        // If v is the root of an SCC
        if (low[v] === discoveryTime[v]) {
            const scc = [];
            let w = null;
            do {
                w = stack.pop();
                onStack[w] = false;
                scc.push(w);
            } while (w !== v);
            sccList.push(scc);
        }
    }

    for (let i = 0; i < V; i++) {
        if (discoveryTime[i] === -1) {
            dfs(i);
        }
    }

    return sccList;
}

// Example Usage
const V = 8;
const adjList = [
    [1],       // Adjacency list for vertex 0
    [2],       // Adjacency list for vertex 1
    [0, 3],    // Adjacency list for vertex 2
    [4],       // Adjacency list for vertex 3
    [5, 7],    // Adjacency list for vertex 4
    [6],       // Adjacency list for vertex 5
    [4],       // Adjacency list for vertex 6
    [6]        // Adjacency list for vertex 7
];

const sccs = tarjansAlgorithm(V, adjList);

console.log('Strongly Connected Components:', sccs);
// Output: Strongly Connected Components: [ [ 6, 5, 4 ], [ 7 ], [ 3 ], [ 2, 1, 0 ] ]

// Explanation:
/*
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(V) for storing discovery times, low-link values, stack, and the SCC result.
 * Tarjan's Algorithm is used to find SCCs in a directed graph efficiently.
 */

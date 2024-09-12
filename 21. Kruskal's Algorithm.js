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
 * Kruskal's Algorithm for finding Minimum Spanning Tree (MST)
 * @param {number[][]} edges - Array of edges where each edge is represented as [u, v, weight] indicating an edge from node u to node v with a given weight.
 * @param {number} V - Number of vertices in the graph.
 * @returns {number[][]} - Array representing the edges of the Minimum Spanning Tree.
 */
function kruskal(V, edges) {
    // Helper function to find the root of a node
    function find(parent, i) {
        if (parent[i] !== i) {
            parent[i] = find(parent, parent[i]);
        }
        return parent[i];
    }

    // Helper function to union two subsets
    function union(parent, rank, x, y) {
        const rootX = find(parent, x);
        const rootY = find(parent, y);

        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }

    // Sort edges based on weight
    edges.sort((a, b) => a[2] - b[2]);

    const parent = Array.from({ length: V }, (_, i) => i);
    const rank = Array.from({ length: V }, () => 0);
    const mst = [];

    for (const [u, v, weight] of edges) {
        if (find(parent, u) !== find(parent, v)) {
            mst.push([u, v, weight]);
            union(parent, rank, u, v);
        }
    }

    return mst;
}

// Example Usage
const V = 4; // Number of vertices
const edges = [
    [0, 1, 10],
    [0, 2, 6],
    [0, 3, 5],
    [1, 3, 15],
    [2, 3, 4]
];

const mst = kruskal(V, edges);

console.log('Minimum Spanning Tree (MST):');
mst.forEach(edge => console.log(`Edge: ${edge[0]}-${edge[1]}, Weight: ${edge[2]}`));

// Explanation:
/* 
 * Time Complexity: O(E log E) where E is the number of edges (due to sorting).
 * Space Complexity: O(V + E) for storing parent, rank arrays, and MST edges.
 * Kruskal's algorithm finds the Minimum Spanning Tree of a graph by sorting edges and using union-find data structure to avoid cycles.
 */

/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readline() {
    return inputString[currentLine++];
}

function bellmanFord(vertices, edges, source) {
    let distances = new Array(vertices).fill(Infinity);
    distances[source] = 0;

    // Relax all edges |V| - 1 times
    for (let i = 0; i < vertices - 1; i++) {
        for (let [u, v, w] of edges) {
            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    // Check for negative-weight cycles
    for (let [u, v, w] of edges) {
        if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
            console.log("Graph contains a negative-weight cycle");
            return;
        }
    }

    console.log(distances);
}

function main() {
    let vertices = +(readline());
    let edgesCount = +(readline());
    let edges = [];
    for (let i = 0; i < edgesCount; i++) {
        let [u, v, w] = readline().split(' ').map(Number);
        edges.push([u, v, w]);
    }
    let source = +(readline());
    bellmanFord(vertices, edges, source);
}

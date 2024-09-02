/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

/**
 * Convex Hull Algorithm using Graham Scan
 * @param {number[][]} points - Array of points where each point is represented as [x, y].
 * @returns {number[][]} - Array of points representing the vertices of the convex hull in counter-clockwise order.
 */
function convexHull(points) {
    // Sort the points by x-coordinate, and by y-coordinate in case of a tie
    points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Helper function to calculate the cross product of vectors OA and OB
    function cross(o, a, b) {
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    }

    // Build the lower hull
    const lower = [];
    for (const p of points) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
            lower.pop();
        }
        lower.push(p);
    }

    // Build the upper hull
    const upper = [];
    for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
            upper.pop();
        }
        upper.push(p);
    }

    // Remove the last point of each half because it is repeated at the beginning of the other half
    upper.pop();
    lower.pop();

    // Concatenate lower and upper hull to get the full convex hull
    return lower.concat(upper);
}

// Example Usage
const points = [
    [0, 0], [1, 1], [2, 2], [2, 0], [3, 1], [3, 3], [0, 3]
];
const result = convexHull(points);

console.log(`Convex Hull Points: ${JSON.stringify(result)}`); 
// Output: Convex Hull Points: [[0,0],[0,3],[3,3],[3,1],[2,0]]

// Explanation:
/* 
 * Time Complexity: O(n log n) due to sorting the points and the linear pass to construct the hull.
 * Space Complexity: O(n) for storing the hull points.
 * The Convex Hull algorithm is used to find the smallest convex polygon that can enclose a set of points in a 2D plane, which is useful in computational geometry, pattern recognition, and geographic information systems (GIS).
 */

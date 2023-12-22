/**Given n points on a 2D plane where points[i] = [xi, yi],
 * Return the widest vertical area between two points such that no points are inside the area.
 * A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). 
 * The widest vertical area is the one with the maximum width.
 * Note that points on the edge of a vertical area are not considered included in the area. 
*/


/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let diff = 0;

    for (var i = 0; i < points.length; i++) {
        points[i] = points[i][0]
    }
    points = points.sort((a,b)=> a -b );

    for (var i = 1; i < points.length; i++) {
        var difference = points[i] - points[i-1];
        if (difference > diff) {
            diff = difference
        }
    };
    return diff
};

console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]))

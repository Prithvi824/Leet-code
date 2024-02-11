/**You are given an array coordinates, coordinates[i] = [x, y], 
 * where [x, y] represents the coordinate of a point. 
 * Check if these points make a straight line in the XY plane. 
 */


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function (coordinates) {
    if (coordinates.length <= 2) {
        return true
    }

    let x0 = coordinates[0][0];
    let y0 = coordinates[0][1];
    let dx = coordinates[1][0] - x0;
    let dy = coordinates[1][1] - y0

    for (let coordinate of coordinates.slice(2)) {
        if ((coordinate[1] - y0) * dx != (coordinate[0] - x0) * dy) {
            return false
        }
    }

    return true
};

console.log(checkStraightLine([[0,0],[0,1],[0,-1]]))
/**
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W',
 * each representing moving one unit north, south, east, or west, respectively.
 * You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
 * Return true if the path crosses itself at any point, that is, 
 * if at any time you are on a location you have previously visited. Return false otherwise.
 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let val = {
        'N': [0, 1],
        'S': [0, -1],
        'W': [-1, 0],
        'E': [1, 0]
    };
    let x = 0;
    let y = 0;
    let seen = [];
    seen.push([x, y]);

    for (let i = 0; i < path.length; i++) {
        let [a, b] = val[path[i]];
        x = x + a;
        y = y + b;

        if (seen.some(point => point[0] === x && point[1] === y)) {
            return true;
        }

        seen.push([x, y]);
    }

    return false;
};

console.log(isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"));

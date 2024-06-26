/**
 * You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
 * The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let rows = grid.length;
  let ans = 0;

  for (let currRow = 0; currRow < rows; currRow++) {
    let cols = grid[currRow].length;

    for (let currCol = 0; currCol < cols; currCol++) {
      let item = grid[currRow][currCol];

      if (item === 1) {
        if (currRow - 1 < 0) ans++;
        else ans += grid[currRow - 1][currCol] === 0 ? 1 : 0;

        if (currRow + 1 === rows) ans++;
        else ans += grid[currRow + 1][currCol] === 0 ? 1 : 0;

        if (currCol - 1 < 0) ans++;
        else ans += grid[currRow][currCol - 1] === 0 ? 1 : 0;

        if (currCol + 1 === cols) ans++;
        else ans += grid[currRow][currCol + 1] === 0 ? 1 : 0;
      }
    }
  }

  return ans;
};

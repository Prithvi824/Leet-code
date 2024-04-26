/**Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. */

var visit = function (grid, row, col) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
    console.log("called")
    return grid;
  }

  if (grid[row][col] === "0") {
    return grid;
  }

  grid[row][col] = "0"

  grid = visit(grid, row - 1, col);
  grid = visit(grid, row + 1, col);
  grid = visit(grid, row, col + 1);
  grid = visit(grid, row, col - 1);

  return grid;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let ans = 0;
  let rows = grid.length;

  for (let currRow = 0; currRow < rows; currRow++) {
    let cols = grid[currRow].length;

    for (let currCol = 0; currCol < cols; currCol++) {
      let item = grid[currRow][currCol];

      if (item === "1") {
        ans++;
        grid = visit(grid, currRow, currCol);
      }
    }
  }

  return ans;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

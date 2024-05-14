/**In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold. */

var calculate = function (grid, x, y) {
  if (grid[x][y] === 0) {
    return 0;
  }

  let tmp = grid[x][y];
  grid[x][y] = 0;

  let up = x - 1 >= 0 ? calculate(grid, x - 1, y) : 0;
  let right = y + 1 < grid[0].length ? calculate(grid, x, y + 1) : 0;
  let bottom = x + 1 < grid.length ? calculate(grid, x + 1, y) : 0;
  let left = y - 1 >= 0 ? calculate(grid, x, y - 1) : 0;

  grid[x][y] = tmp;
  return grid[x][y] + Math.max(up, right, bottom, left);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let score = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      score = Math.max(score, calculate(grid, i, j));
    }
  }

  return score;
};

console.log(getMaximumGold([[1,0,7,0,0,0],[2,0,6,0,1,0],[3,5,6,7,4,2],[4,3,1,0,2,0],[3,0,5,0,20,0]]))
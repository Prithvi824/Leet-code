"""
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
"""

from typing import List

class Solution:

    def visit(self, grid, row, col):
        if row < 0 or col < 0 or row == len(grid) or col == len(grid[row]):
            return grid

        if grid[row][col] == "0":
            return grid


        grid[row][col] = "0"

        grid = self.visit(grid, row - 1, col)
        grid = self.visit(grid, row + 1, col)
        grid = self.visit(grid, row, col - 1)
        grid = self.visit(grid, row, col + 1)

        return grid

    def numIslands(self, grid: List[List[str]]) -> int:
        ans = 0
        rows = len(grid)

        for curr_row in range(rows):
            cols = len(grid[curr_row])

            for curr_col in range(cols):
                item = grid[curr_row][curr_col]

                if item == "1":
                    ans += 1
                    grid = self.visit(grid, curr_row, curr_col)

        return ans

print(Solution().numIslands([
  ["1","1","0","1","1"],
  ["1","1","0","1","1"],
  ["0","0","1","0","0"],
  ["1","1","0","1","1"],
  ["1","1","0","1","1"]
]))
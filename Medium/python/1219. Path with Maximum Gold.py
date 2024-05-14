"""
In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.
"""

from typing import List

class Solution:
    def calculate(self, grid, x, y):
        if grid[x][y] == 0:
            return 0

        tmp, grid[x][y] = grid[x][y], 0\

        up = self.calculate(grid, x-1, y) if x-1 >= 0 else 0
        left = self.calculate(grid, x, y-1) if y-1 >= 0 else 0
        bottom = self.calculate(grid, x+1, y) if x+1 < len(grid) else 0
        right = self.calculate(grid, x, y+1) if y+1 < len(grid[0]) else 0

        grid[x][y] = tmp

        return grid[x][y] + max(up, left, bottom, right)

    def getMaximumGold(self, grid: List[List[int]]) -> int:
        score = 0

        rows = len(grid)
        cols = len(grid[0])
        for i in range(rows):
            for j in range(cols):
                score = max(score, self.calculate(grid, i, j))

        return score

print(Solution().getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]))
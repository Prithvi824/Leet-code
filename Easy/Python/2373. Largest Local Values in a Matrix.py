"""
You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.
"""

from typing import List

class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        local_len = len(grid) - 2
        maxLocal = [[0 for _ in range(local_len)] for _ in range(local_len)]

        for i in range(local_len):
            for j in range(local_len):

                print("i: ",i)
                print("j: ",j)

                maxLocal[i][j] = max(
                    grid[i][j],
                    grid[i][j+1],
                    grid[i][j+2],
                    grid[i+1][j],
                    grid[i+1][j+1],
                    grid[i+1][j+2],
                    grid[i+2][j],
                    grid[i+2][j+1],
                    grid[i+2][j+2],
                )

        return maxLocal

print(Solution().largestLocal([[2,5,5],[3,2,5],[1,2,3]]))
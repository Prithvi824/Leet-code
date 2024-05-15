"""
You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

A cell containing a thief if grid[r][c] = 1
An empty cell if grid[r][c] = 0
You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.
"""

from collections import deque
from collections import deque

class Solution:
    def __init__(self):
        self.dir = [(1, 0), (0, 1), (-1, 0), (0, -1)]

    def precalculate(self, grid):
        n = len(grid)
        q = deque()
        safeness_factor = [[float("inf")] * n for _ in range(n)]
        
        for i in range(n):
            for j in range(n):
                if grid[i][j]:
                    safeness_factor[i][j] = 0
                    q.append((i, j))
        
        while q:
            x, y = q.popleft()
            for dx, dy in self.dir:
                new_x, new_y = x + dx, y + dy
                if 0 <= new_x < n and 0 <= new_y < n:
                    if safeness_factor[new_x][new_y] > safeness_factor[x][y] + 1:
                        safeness_factor[new_x][new_y] = safeness_factor[x][y] + 1
                        q.append((new_x, new_y))
        
        return safeness_factor

    def findPath(self, grid, threshold):
        n = len(grid)
        if grid[0][0] < threshold or grid[-1][-1] < threshold:
            return False
        
        q = deque([(0, 0)])
        visited = [[False] * n for _ in range(n)]
        visited[0][0] = True
        
        while q:
            x, y = q.popleft()
            if x == n - 1 and y == n - 1:
                return True
            
            for dx, dy in self.dir:
                new_x, new_y = x + dx, y + dy
                if 0 <= new_x < n and 0 <= new_y < n and not visited[new_x][new_y] and grid[new_x][new_y] >= threshold:
                    visited[new_x][new_y] = True
                    q.append((new_x, new_y))
        
        return False

    def maximumSafenessFactor(self, grid):
        safeness_grid = self.precalculate(grid)
        low, high = 0, len(grid) * len(grid)
        ans = 0

        while low <= high:
            mid = (low + high) // 2
            if self.findPath(safeness_grid, mid):
                ans = mid
                low = mid + 1
            else:
                high = mid - 1
        
        return ans


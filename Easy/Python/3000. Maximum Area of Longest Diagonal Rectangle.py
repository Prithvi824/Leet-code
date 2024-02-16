'''
You are given a 2D 0-indexed integer array dimensions.

For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.

Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.
'''

from math import sqrt


class Solution:
    def areaOfMaxDiagonal(self, dimensions: list[list[int]]) -> int:
        area = 0
        diagonal = 0

        for width, length in dimensions:
            curr_diagonal = sqrt((width ** 2) + (length ** 2))
            if curr_diagonal == diagonal:
                area = max(area, width * length)
                diagonal = curr_diagonal
            elif curr_diagonal > diagonal:
                area = width * length
                diagonal = curr_diagonal

        return area

print(Solution().areaOfMaxDiagonal([[6,5],[8,6],[2,10],[8,1],[9,2],[3,5],[3,5]]))
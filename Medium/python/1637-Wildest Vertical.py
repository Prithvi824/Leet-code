'''
Given n points on a 2D plane where points[i] = [xi, yi],
Return the widest vertical area between two points such that no points are inside the area.
A vertical area is an area of fixed-width extending infinitely along the y-axis
(i.e., infinite height). The widest vertical area is the one with the maximum width.
Note that points on the edge of a vertical area are not considered included in the area.
'''

class Solution:
    def maxWidthOfVerticalArea(self, points: list[list[int]]) -> int:
        x = []
        for i in points:
            x.append(i[0])
        x.sort()

        right = len(x) -1
        left = len(x) -2
        diff = 0

        while left >= 0:
            if x[right] - x[left] > diff:
                diff = x[right] - x[left]
            right -= 1
            left -= 1

        return diff

print(Solution().maxWidthOfVerticalArea([[8,8],[4,8]]))
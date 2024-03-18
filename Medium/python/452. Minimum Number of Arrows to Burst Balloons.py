'''
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
'''


class Solution:
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        points.sort(key=lambda x: x[0])
        stack = [points[0]]

        for location in points:
            if location[0] <= stack[-1][1]:
                element = stack.pop()
                stack.append([max(element[0], location[0]), min(element[1], location[1])])
            else:
                stack.append(location)

        return len(stack)

print(Solution().findMinArrowShots([[10,16],[2,8],[1,6],[7,12],[3,9]]))
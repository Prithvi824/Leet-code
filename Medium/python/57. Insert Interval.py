'''
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.
'''


class Solution:
    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
        intervals.append(newInterval)
        intervals.sort(key=lambda x: x[0])

        stack = [intervals[0]]

        for interval in intervals[1:]:
            if stack[-1][1] >= interval[0]:
                element = stack.pop()
                stack.append([min(element[0], interval[0]), max(element[1], interval[1])])
            else:
                stack.append(interval)

        return stack

print(Solution().insert([[1,2],[3,4],[5,6],[7,8],[9,10]],[2,7]))
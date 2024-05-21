"""
Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
"""

from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []

        def backtrack(start, path):
            result.append(path)
            for i in range(start, len(nums)):
                backtrack(i + 1, path + [nums[i]])

        backtrack(0, [])
        return result
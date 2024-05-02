"""
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.
"""

from typing import List

class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort()
        left = 0
        right = len(nums) - 1

        while left < right:
            summation = nums[left] + nums[right]
            if summation == 0:
                return abs(nums[left])
            elif summation < 0:
                left += 1
            else:
                right -= 1

        return -1
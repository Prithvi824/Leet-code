'''
Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).
'''

class Solution:
    def canBeIncreasing(self, nums):
        def isIncreasing(arr):
            for i in range(1, len(arr)):
                if arr[i - 1] >= arr[i]:
                    return False
            return True

        for i in range(len(nums)):
            if i == 0:
                sequence = nums[1:]
            elif i == len(nums) - 1:
                sequence = nums[:-1]
            else:
                sequence = nums[:i] + nums[i + 1:]
            
            if isIncreasing(sequence):
                return True
        return False

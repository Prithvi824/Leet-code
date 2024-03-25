'''
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
'''


class Solution:
    def findDuplicates(self, nums: list[int]) -> list[int]:
        nums.sort()
        arr = []

        for ind, val in enumerate(nums):
            if ind == 0:
                pass
            elif nums[ind - 1] == nums[ind]:
                arr.append(val)

        return arr

print(Solution().findDuplicates([[4,3,2,7,8,2,3,1]]))
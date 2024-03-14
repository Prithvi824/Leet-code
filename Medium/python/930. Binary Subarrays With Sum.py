'''
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.
'''

class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        ps = 0
        mapping = { 0:1 }
        res = 0

        for num in nums:
            ps += num
            val = ps - goal
            if val in mapping:
                res += mapping[val]
            if ps in mapping:
                mapping[ps] += 1
            else:
                mapping[ps] = 1

        return res

print(Solution().numSubarraysWithSum([1, 1, 1, 1, 1],3))
'''
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
'''

class Solution:
    def findMaxLength(self, nums: list[int]) -> int:
        mapping = {}
        ps = 0
        ans = 0

        for ind, val in enumerate(nums):
            ps += 1 if val == 1 else -1

            if ps == 0:
                ans = max(ans, ind+1)
            if ps not in mapping:
                mapping[ps] = ind + 1
            else:
                ans = max(ans, ind + 1  - mapping[ps])

        return ans

print(Solution().findMaxLength([0,1,1]))
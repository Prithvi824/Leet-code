'''
You are given a 0-indexed array of integers nums.

A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.

Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix
'''

class Solution:
    def missingInteger(self, nums: list[int]) -> int:
        last = nums[0]
        summation = nums[0]

        for num in nums[1:]:
            if last + 1 != num:
                break
            else:
               summation += num
               last = num

        while True:
            if summation in nums:
                summation += 1
            else:
                break

        return summation

print(Solution().missingInteger([7,8,9,10,13,33,34,35,37,38,39]))
'''
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
'''


class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        ans = [1]

        prefix = 1
        for i in range(1,len(nums)):
            prefix *= nums[i-1]
            ans.append(prefix)

        suffix = 1
        for i in range(len(nums) -2 ,-1,-1):
            suffix *= nums[i + 1]
            ans[i] = ans[i] * suffix

        return ans

print(Solution().productExceptSelf([1,2,3,4]))
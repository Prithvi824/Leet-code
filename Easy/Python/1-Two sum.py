'''
In this question i looped over every single element and finds out
what's the difference between the target and i if the difference
is available in the array return the indexx of them both 
'''
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        length = len(nums)
        for i in range(length):
            missing = target - nums[i]
            if missing in nums[i+1:]:
                return[i,nums.index(missing,i+1)]

print(Solution().twoSum([3,3],6))

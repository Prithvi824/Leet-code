"""Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array."""

class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        l = len(nums)
        arr = list(range(l + 1))

        for num in nums:
            arr[num] = None

        return [i for i in arr if i != None][0]

print(Solution().missingNumber([9,6,4,2,3,5,7,0,1]))
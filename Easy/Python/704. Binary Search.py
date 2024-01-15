'''Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
'''



class Solution:
    def search(self, nums: list[int], target: int) -> int:
        if len(nums) == 1:
            if target == nums[0]:
                return 0
            return -1

        right = len(nums) - 1
        left = 0

        while left <= right:
            mid = (right + left) // 2
            val = nums[mid]
            print(f'right: {right} left: {left} mid: {mid} mid_val: {val}')
            if val == target:
                return nums.index(val)
            if val < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1

print(Solution().search([2,5],5))

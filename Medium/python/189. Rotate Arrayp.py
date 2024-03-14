'''
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
'''

class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)

        if k > 0:
            if k < length:
                nums[:] = nums[length - k:] + nums[0: length - k]
            else:
                ind = 1
                while ind <= k:
                    nums[:] = nums[-1:] + nums[0:-1]
                    ind += 1

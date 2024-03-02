'''
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.
'''

class Solution:
    def sortedSquares(self, nums: list[int]) -> list[int]:
        length = len(nums)
        arr = [0] * length
        left = 0
        right = length - 1
        ind = length - 1

        while left <= right:
            left_sq = nums[left] * nums[left]
            right_sq = nums[right] * nums[right]

            if left_sq > right_sq:
                arr[ind] = left_sq
                left += 1
            else:
                arr[ind] = right_sq
                right -= 1

            ind -= 1

        return arr

print(Solution().sortedSquares([-4,-1,0,3,10]))
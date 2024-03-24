'''
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
'''

from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow = fast = nums[0]

        # Move slow and fast pointers until they meet
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]

            if slow == fast:
                break

        # Reset slow pointer to the start
        slow = nums[0]

        # Move slow and fast pointers at the same pace until they meet again
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]

        # Return the duplicate number
        return slow

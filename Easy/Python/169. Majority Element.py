'''
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
'''

class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        vote = 1
        length = len(nums)
        contestent = nums[0]

        for ind in range(1,length):
            if nums[ind] == contestent:
                vote += 1
            elif vote < 0:
                contestent = nums[ind]
                vote = 1
            else:
                vote -= 1

        return contestent
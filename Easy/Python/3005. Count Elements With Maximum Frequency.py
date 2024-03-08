'''
You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.
'''

from typing import List

class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        mapping = {}

        for key in nums:
            if key in mapping:
                mapping[key] += 1
            else:
                mapping[key] = 1
        
        freq = 0
        max_length = 0

        for key, value in mapping.items():
            if max_length == value:
                freq += value
            elif max_length < value:
                freq = value
                max_length = value

        return freq
    
print(Solution().maxFrequencyElements([1,1,1,2,2,2,3,3,3]))
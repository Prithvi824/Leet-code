'''
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
'''

from typing import List

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        mapping = {}
        arr = []

        for num in nums1:
            if num not in mapping:
                mapping[num] = 1

        for num in nums2:
            if num in mapping:
                arr.append(num)
                del mapping[num]

        return arr

print(Solution().intersection([1,2,2,1],[2,2]))
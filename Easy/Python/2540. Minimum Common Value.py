'''
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
'''

from typing import List

class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        pointer_1 = 0
        pointer_2 = 0

        len_num_1 = len(nums1)
        len_num_2 = len(nums2)

        while pointer_1 < len_num_1 and pointer_2 < len_num_2:
            n1 = nums1[pointer_1]
            n2 = nums2[pointer_2]

            if n1 == n2:
                return n1
            elif n1 < n2:
                pointer_1 += 1
            else:
                pointer_2 += 1

        return -1

print(Solution().getCommon([4,5,6],[1,2,3]))
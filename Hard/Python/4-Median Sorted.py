'''
Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.
'''

class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        merged = nums1 + nums2
        if len(merged) == 0:
            return 0

        merged.sort()
        mid = len(merged) // 2
        if len(merged) % 2 == 0:
            median = (merged[mid] + merged[mid-1]) / 2
            return median
        return merged[mid]

print(Solution().findMedianSortedArrays([1,2,3],[4,5]))
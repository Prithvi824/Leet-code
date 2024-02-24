'''
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
'''

class Solution:
    def validMountainArray(self, arr: list[int]) -> bool:
        start, end, L = 0, -1, len(arr)

        while start < L-1 and arr[start] < arr[start+1]: 
            start += 1
        while end > -L and arr[end] < arr[end-1]: 
            end -= 1

        return start == end + L and 0 < start and end < -1
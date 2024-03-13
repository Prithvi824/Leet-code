'''
Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.
'''

class Solution:
    def pivotInteger(self, n: int) -> int:
        summation = (n * (n + 1)) // 2
        pivout_sum = 1
        val = 1

        while pivout_sum <= summation:
            if pivout_sum == summation:
                return val
            else:
                summation -= val
                val += 1
                pivout_sum += val

        return -1
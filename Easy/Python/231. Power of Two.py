'''
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.
'''

class Solution:
    def isPowerOfTwo(self, n: int, powered=0) -> bool:
        val = 2 ** powered
        if val >= n:
            return n == val
        return self.isPowerOfTwo(n, powered+1)

print(Solution().isPowerOfTwo(5))
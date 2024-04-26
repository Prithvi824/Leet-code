"""
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
"""

class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1 or n == 2:
            return 1

        t = 0
        t1 = 1
        t2 = 1
        tn = None

        for i in range(3,n+1):
            tn = t + t1 + t2
            t = t1
            t1 = t2
            t2 = tn

        return tn
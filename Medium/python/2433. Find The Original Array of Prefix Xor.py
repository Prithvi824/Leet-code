'''
You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
Note that ^ denotes the bitwise-xor operation.

It can be proven that the answer is unique.
'''


class Solution:
    def findArray(self, pref: list[int]) -> list[int]:
        n = len(pref)
        res = [0] * n
        x = 0
        for i in range(n):
            res[i] = x ^ pref[i]
            x ^= res[i]
        
        return res

print(Solution().findArray([5,2,0,3,1]))

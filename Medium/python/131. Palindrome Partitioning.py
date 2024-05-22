"""
Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.
"""

from typing import List


class Solution:
    def checkPali(self, s, i, j):
        l = i
        r = j
        while l < r:
            if s[l] != s[r]:
                return False
            else:
                l += 1
                r -= 1
        return True

    def partition(self, s: str) -> List[List[str]]:
        result = []
        part = []

        def dfs(i):
            if i >= len(s):
                result.append(part.copy())
                return

            for j in range(i, len(s)):
                if self.checkPali(s, i, j):
                    part.append(s[i: j+1])
                    dfs(j + 1)
                    part.pop()

        dfs(0)
        return result

print(Solution().partition("aba"))
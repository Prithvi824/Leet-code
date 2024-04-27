"""
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
"""

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        ind = 0
        word = ""

        for char in t:
            if ind < len(s) and char == s[ind]:
                word += char
                ind += 1

        return word == s
    
print(Solution().isSubsequence("","abc"))
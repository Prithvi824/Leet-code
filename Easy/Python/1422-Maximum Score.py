'''
Given a string s of zeros and ones, return the maximum score after splitting the string
into two non-empty substrings (i.e. left substring and right substring).
The score after splitting a string is the number of zeros in the 
left substring plus the number of ones in the right substring.
'''

class Solution:
    def maxScore(self, s: str) -> int:
        one_count = s.count('1')
        zero_count = 0
        max_diff = 0

        for i in range(len(s) - 1):
            if s[i] == '0':
                zero_count += 1
            else:
                one_count -= 1
            
            max_diff = max(max_diff , zero_count + one_count)

        return max_diff

print(Solution().maxScore("011101"))

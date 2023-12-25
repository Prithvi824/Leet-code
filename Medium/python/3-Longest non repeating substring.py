'''
Given a string s, find the length of the longest 
substring without repeating characters.
'''


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        length = 0
        substring = ''
        right = 0

        while right <= len(s) - 1:
            if s[right] not in substring:
                substring += s[right]
            else:
                length = max(length, len(substring))
                sub_pointer = substring.rfind(s[right])
                substring = substring[sub_pointer + 1:] + s[right]
            right += 1

        if length < len(substring):
            return len(substring)

        return length

print(Solution().lengthOfLongestSubstring("dvdfcehdbo"))

"""
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
"""

class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        ans = ""
        stack = []

        for ind, char in enumerate(s):
            if char == ")" and stack:
                stack.pop()
                ans += char
            elif char =="(":
                stack.append(")")
                ans += char
            elif not char == ")":
                ans += char

        while stack:
            ind = ans.rindex("(")
            ans = ans[:ind] + ans[ind+1:]
            stack.pop()

        return ans

print(Solution().minRemoveToMakeValid("lee(t(c)o)de)"))

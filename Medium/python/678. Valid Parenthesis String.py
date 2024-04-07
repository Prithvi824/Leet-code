"""
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
"""

class Solution:
    def checkValidString(self, s: str) -> bool:
        left_min, left_max = 0, 0

        for ch in s:
            if ch == "(":
                left_min, left_max = left_min + 1, left_max + 1
            elif ch == ")":
                left_min, left_max = left_min - 1, left_max - 1
            else:
                left_min, left_max = left_min - 1, left_max + 1

            if left_max < 0:
                return False
            if left_min < 0:
                left_min = 0

        return left_min == 0

print(Solution().checkValidString("((((((()(((((((((()())()()()(((()())))))))))(())(()))())((()()(((()((()(())(()**)()(())"))
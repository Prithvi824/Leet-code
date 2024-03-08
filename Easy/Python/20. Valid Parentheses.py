'''
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
'''

class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) <= 1:
            return False

        mapping = {
            "(": ")",
            "{": "}",
            "[": "]"
        }

        closing = [")","}","]"]

        stack = []

        for bracket in s:
            if bracket in closing:
                if len(stack) == 0 or mapping[stack[-1]] != bracket:
                    return False
                else:
                    stack.pop()
            else:
                stack.append(bracket)

        return True if len(stack) == 0 else False

print(Solution().isValid(r"()"))
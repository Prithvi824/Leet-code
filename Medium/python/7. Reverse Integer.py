'''Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
'''

class Solution:
    def reverse(self, x: int) -> int:
        if 0 >= x:
            x = str(x)[1:]
            x = int('-' + x[::-1])
        else:
            x = int(str(x)[::-1])

        if x > 2147483647 or x < -2147483648:
            return 0

        return x

print(Solution().reverse(-123))

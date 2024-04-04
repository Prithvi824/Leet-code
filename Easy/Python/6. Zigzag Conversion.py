"""
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
"""

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        matrix = [[] for _ in range(numRows)]
        ind = 0
        flag = True

        for char in s:
            matrix[ind].append(char)

            ind += flag or -1
            if ind == 0:
                flag = True
            elif ind == numRows or ind == numRows - 1:
                flag = False

        word = ""

        for row in matrix:
            word += "".join(row)

        return word

print(Solution().convert("AB", 1))
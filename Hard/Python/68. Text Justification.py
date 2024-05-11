"""
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.
"""

from typing import List

class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        ans = []
        curr_line, curr_length = [], 0
        i = 0

        while i < len(words):
            # when there is no space in the line
            if len(words[i]) + curr_length + len(curr_line) > maxWidth:
                line = ""

                if len(curr_line) == 1:
                    line = curr_line[0] + (" " * (maxWidth - len(curr_line[0])))
                else:
                    spaces = (maxWidth - curr_length) // (len(curr_line) - 1)
                    remaining_spaces = (maxWidth - curr_length) % (len(curr_line) - 1)

                    for char in curr_line[0 : -1]:
                        line += char + (" " * spaces)
                        if remaining_spaces:
                            line += " "
                            remaining_spaces -= 1

                    line += curr_line[-1]

                ans.append(line)
                curr_line, curr_length = [], 0

            # when there is space in the line
            curr_line.append(words[i])
            curr_length += len(words[i])
            i += 1

        # Handle the last word
        ans.append(" ".join(curr_line) + (" " * (maxWidth - curr_length - len(curr_line) + 1)))

        return ans

print(Solution().fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
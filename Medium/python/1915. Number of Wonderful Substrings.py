"""
A wonderful string is a string where at most one letter appears an odd number of times.

For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.

A substring is a contiguous sequence of characters in a string.
"""

class Solution:
    def xor_with_map(self, current_xor: int, mapping: dict):
        letter_map = {
            "a": 0b0000000001,
            "b": 0b0000000010,
            "c": 0b0000000100,
            "d": 0b0000001000,
            "e": 0b0000010000,
            "f": 0b0000100000,
            "g": 0b0001000000,
            "h": 0b0010000000,
            "i": 0b0100000000,
            "j": 0b1000000000,
        }

        ans = 0

        for key, value in letter_map.items():
            res = current_xor ^ value

            if mapping.get(res, False):
               ans += mapping.get(res)

        return ans

    def wonderfulSubstrings(self, word: str) -> int:
        letter_map = {
            "a": 0b0000000001,
            "b": 0b0000000010,
            "c": 0b0000000100,
            "d": 0b0000001000,
            "e": 0b0000010000,
            "f": 0b0000100000,
            "g": 0b0001000000,
            "h": 0b0010000000,
            "i": 0b0100000000,
            "j": 0b1000000000,
        }

        cummulative_xor = 0b0000000000
        mapping = {0b0000000000: 1}
        ans = 0

        for character in word:
            cummulative_xor = cummulative_xor ^ letter_map[character]
            ans += self.xor_with_map(cummulative_xor, mapping)

            if not mapping.get(cummulative_xor, False):
                mapping[cummulative_xor] = 1
            else:
                ans += mapping[cummulative_xor]
                mapping[cummulative_xor] += 1

        return ans

print(Solution().wonderfulSubstrings("fiabhedce"))
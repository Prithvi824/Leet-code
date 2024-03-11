'''
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.
'''


class Solution:
    def customSortString(self, order: str, s: str) -> str:
        lk = {}
        w = ""

        for i in s:
            if i not in lk:
                lk[i] = 1
            else:
                lk[i] += 1

        for i in order:
            if i in lk:
                w += i * lk[i]
                del lk[i]

        for key, val in lk.items():
            w += key * val

        return w

print(Solution().customSortString("hucw","utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh"))
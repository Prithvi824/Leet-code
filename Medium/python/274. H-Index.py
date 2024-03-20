'''
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
'''

class Solution:
    def hIndex(self, citations: list[int]) -> int:
        l = len(citations)
        citations.sort()
        citations = citations[::-1]

        if l == 1:
            return citations[0] if citations[0] <= 1 else 1

        for i in range(l):
            if citations[i] <= i:
                return i

        return len(citations)
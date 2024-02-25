'''
You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.
'''


import math

class Solution:
    def hasGroupsSizeX(self, deck: list[int]) -> bool:
        arr = set(deck)
        count = deck.count(deck[0])

        for card in arr:
            card_count = deck.count(card)
            if card_count != count:
                count = math.gcd(card_count, count)
                if count == 1:
                    return False

        return count > 1

print(Solution().hasGroupsSizeX([1,1,2,2,2,2,2]))
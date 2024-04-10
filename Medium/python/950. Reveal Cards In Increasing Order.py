"""
You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].

You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.

You will do the following steps repeatedly until all cards are revealed:

Take the top card of the deck, reveal it, and take it out of the deck.
If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
If there are still unrevealed cards, go back to step 1. Otherwise, stop.
Return an ordering of the deck that would reveal the cards in increasing order.

Note that the first entry in the answer is considered to be the top of the deck.
"""

from collections import deque 

class Solution:
    def deckRevealedIncreasing(self, deck: list[int]) -> list[int]:
        deck.sort()
        length = len(deck)
        arr = [ _ for _ in range(length) ]
        ans = [None] * length
        ind = 0
        ans_deck = deque(arr)

        while ind < length - 1:
            ans_deck.append(ans_deck[ind + 1])
            del ans_deck[ind+1]
            ind += 1

        for ind, place in enumerate(ans_deck):
            ans[place] = deck[ind]

        return ans




print(Solution().deckRevealedIncreasing([17,13,11,2,3,5,7]))
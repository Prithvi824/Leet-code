"""You are given an integer array matches where matches[i] = [winneri, loseri] 
indicates that the player winner[i] defeated player loser[i] in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
"""

class Solution:
    def findWinners(self, matches: list[list[int]]) -> list[list[int]]:
        mapping = {}

        for match in matches:
            p1 = str(match[0])
            p2 = str(match[1])

            if p1 not in mapping:
                mapping[p1] = 0

            if p2 in mapping:
                mapping[p2] += 1
            else:
                mapping[p2] = 1

        winners = [int(winner[0]) for winner in mapping.items() if winner[1] == 0]
        winners.sort()
        losers = [int(loser[0]) for loser in mapping.items() if loser[1] == 1]
        losers.sort()
        return [winners, losers]

print(Solution().findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))

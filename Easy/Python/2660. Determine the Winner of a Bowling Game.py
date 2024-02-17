'''
You are given two 0-indexed integer arrays player1 and player2, that represent the number of pins that player 1 and player 2 hit in a bowling game, respectively.

The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

Assume a player hit xi pins in the ith turn. The value of the ith turn for the player is:

2xi if the player hit 10 pins in any of the previous two turns.
Otherwise, It is xi.
The score of the player is the sum of the values of their n turns.

Return

1 if the score of player 1 is more than the score of player 2,
2 if the score of player 2 is more than the score of player 1, and
0 in case of a draw.
'''

class Solution:
    def calc_points(self, arr: list[int]) -> int:
        points = 0
        last_two = 0

        for point in arr:
            if last_two != 0:
                points += point * 2
                if point == 10:
                    last_two = 2
                else:
                    last_two -= 1
            elif point == 10:
                last_two = 2
                points += point
            else:
                points += point

        return points

    def isWinner(self, player1: list[int], player2: list[int]) -> int:
        player1 = self.calc_points(player1)
        player2 = self.calc_points(player2)

        if player1 > player2:
            return 1
        elif player2 > player1:
            return 2
        return 0
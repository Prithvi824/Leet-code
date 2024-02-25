'''
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
'''

class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        length = len(flowerbed)

        if length == 1:
            if n == 0 or (n == 1 and flowerbed[0] == 0):
                return True

        count = 0

        for spot in range(length):
            if flowerbed[spot] == 0:
                if spot == 0:
                    if flowerbed[spot+1] == 0:
                        flowerbed[spot] = 1
                        count += 1
                elif spot == length - 1:
                    if flowerbed[spot-1] == 0:
                        flowerbed[spot] = 1
                        count += 1
                else:
                    if flowerbed[spot+1] == 0 and flowerbed[spot-1] == 0:
                        flowerbed[spot] = 1
                        count += 1

        return count >= n

print(Solution().canPlaceFlowers([1],0))
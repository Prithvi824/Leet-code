'''
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
'''

class Solution:
    def candy(self, ratings: list[int]) -> int:
        candy = [1] * len(ratings)

        for ind in range(1, len(ratings)):
            if ratings[ind] > ratings[ind -1]:
                candy[ind] = candy[ind-1] + 1

        for ind in range(len(ratings) - 2, -1, -1):
            if ratings[ind] > ratings[ind + 1] and candy[ind] <= candy[ind + 1]:
                candy[ind] = candy[ind+1] + 1

        return sum(candy)

print(Solution().candy([10,9,8,7,6,5,4,3,2,1]))
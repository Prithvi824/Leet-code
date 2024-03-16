'''
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
'''

class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        left = right = 0
        profit = 0

        while right < len(prices):
            left_itm = prices[left]
            right_itm = prices[right]
            if right_itm < left_itm:
                left = right
            elif right_itm > left_itm:
                profit += right_itm - left_itm
                left = right
            right += 1

        return profit

print(Solution().maxProfit([1,3,5,15]))
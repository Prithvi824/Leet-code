/**You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve. */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let right = 0;
  let left = 0;
  let profit = 0;

  while (right < prices.length) {
    let left_itm = prices[left];
    let right_itm = prices[right];

    if (right_itm < left_itm) left = right;
    else if (right_itm > left_itm) {
      profit += right_itm - left_itm;
      left = right;
    }

    right++;
  }

  return profit;
};

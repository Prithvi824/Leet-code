/**You are given an integer array prices representing the prices of various chocolates in a store.
 * You are also given a single integer money, which represents your initial amount of money.
 * You must buy exactly two chocolates in such a way that you still have some non-negative leftover money.
 * You would like to minimize the sum of the prices of the two chocolates you buy.
 * Return the amount of money you will have leftover after buying the two chocolates.
 * If there is no way for you to buy two chocolates without ending up in debt, return money.
 * Note that the leftover must be non-negative.
 */



/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort(function (a, b) {
        return a - b
    });
    let cost = money - (prices[0] + prices[1]);
    if ( cost >= 0) {
        return cost
    }
    return money
    };

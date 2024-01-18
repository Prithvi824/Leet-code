/** You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let last = 1;
    let second_last = 1;
    let temp = 0

    for (let i = 0; i < n-1; i++) {
        temp = last;
        last = second_last + last;
        second_last = temp
    }

    return last
};

console.log(climbStairs(5))
/**You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise. */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let power = 0;

  for (let num of nums) {
    if (power < 0) return false;
    else if (num >= power) power = num;
    power -= 1
  }

  return true
};

console.log(canJump([3,2,1,0,4]))
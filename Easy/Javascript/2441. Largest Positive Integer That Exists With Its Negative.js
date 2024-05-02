/**Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let right = nums.length;
  let left = 0;

  while (left < right) {
    let summation = nums[left] + nums[right];

    if (summation === 0) return nums[right];
    else if (summation < 0) left += 1;
    else right -= 1;
  }

  return -1;
};

console.log(findMaxK([-1,2,-3,3]))

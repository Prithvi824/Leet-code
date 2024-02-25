/**
 * You are given a 0-indexed array of integers nums.
 * A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.
 * Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let last = nums[0];
  let summation = nums[0];

  for (let num of nums.slice(1)) {
    if (num != last + 1) {
      break;
    } else {
      summation += num;
      last = num;
    }
  }

  while (true) {
    if (nums.includes(summation)) {
      summation++;
    } else {
      break;
    }
  }

  return summation;
};

console.log(missingInteger([1,2,3,2,5]));

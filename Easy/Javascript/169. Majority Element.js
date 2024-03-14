/**Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  let candidate = nums[0];

  for (let ind = 1; ind < nums.length; ind++) {
    if (count === 0) {
      candidate = nums[ind];
      count = 1;
    } else if (nums[ind] === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

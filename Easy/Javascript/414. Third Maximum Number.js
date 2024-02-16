/**Given an integer array nums, return the third distinct maximum number in this array.
 * If the third maximum does not exist, return the maximum number.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let maximum = nums[0];
  let iteration = 1;

  for (let val of nums) {
    if (val != maximum) {
        maximum = val;
        iteration += 1;
        if (iteration === 3) {
            return maximum
        }
    }
  }

  return nums[0]
};

console.log(thirdMax([3,2,1]));

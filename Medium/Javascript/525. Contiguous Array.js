/**
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = {};
  let ans = 0;
  let ps = 0;

  for (let ind = 0; ind < nums.length; ind++) {
    ps += nums[ind] === 1 ? 1 : -1;

    if (ps === 0) {
      ans = ind + 1;
    } else if (ps in map) {
      ans = Math.max(ans, ind + 1 - map[ps]);
    } else {
      map[ps] = ind + 1;
    }
  }

  return ans;
};

console.log(findMaxLength([0, 1]));

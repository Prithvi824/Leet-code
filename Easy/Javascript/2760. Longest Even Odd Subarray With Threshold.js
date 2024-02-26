/**
 * You are given a 0-indexed integer array nums and an integer threshold.
 * Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:
 * nums[l] % 2 == 0
 * For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
 * For all indices i in the range [l, r], nums[i] <= threshold
 * Return an integer denoting the length of the longest such subarray.
 * Note: A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  var len = 0;
  var arr = [];
  var flag = false;

  for (let num of nums) {
    if (flag) {
      if (arr[arr.length - 1] % 2 == 0 && num % 2 != 0 && num <= threshold) {
        arr.push(num);
      } else if (
        arr[arr.length - 1] % 2 != 0 &&
        num % 2 === 0 &&
        num <= threshold
      ) {
        arr.push(num);
      } else {
        flag = false;
        len = Math.max(len, arr.length);
        arr = [];
      }
    }
    if (!flag && num % 2 === 0 && num <= threshold) {
      flag = true;
      arr.push(num);
    }
  }

  return Math.max(len, arr.length);
};

console.log(
  longestAlternatingSubarray([2, 3, 2, 3, 2, 9, 2, 5, 2, 5, 2, 5, 2, 5], 4)
);

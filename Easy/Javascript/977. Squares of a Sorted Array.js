/**Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var len = nums.length;
  var arr = Array(len).fill(null);
  var left = 0;
  var right = len - 1;
  var ind = len - 1;

  while (left <= right) {
    var left_sq = nums[left] * nums[left];
    var right_sq = nums[right] * nums[right];

    if (left_sq > right_sq) {
      arr[ind] = left_sq;
      left += 1;
    } else {
      arr[ind] = right_sq;
      right -= 1
    }

    ind -= 1;
  }

  return arr;
};

console.log(sortedSquares([1, 2, 3, 4]));

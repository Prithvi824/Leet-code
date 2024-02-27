/**Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
 * The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length). */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    function isIncreasing(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) {
          return false;
        }
      }
      return true;
    }

    for (let i = 0; i < nums.length; i++) {
      let sequence;
      if (i === 0) {
        sequence = nums.slice(1);
      } else if (i === nums.length - 1) {
        sequence = nums.slice(0, -1);
      } else {
        sequence = nums.slice(0, i).concat(nums.slice(i + 1));
      }

      if (isIncreasing(sequence)) {
        return true;
      }
    }
    return false;
  };

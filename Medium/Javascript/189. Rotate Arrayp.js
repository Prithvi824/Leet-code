/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k > 0) {
    if (k > nums.length) {
      let ind = 0;
      while (ind < k) {
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
        ind++
      }
    }
    else{
        nums.unshift(...nums.slice(nums.length - k))
        nums.splice(nums.length - k,k)
    }
  }

  return nums
};

console.log(rotate([1,2,3,4,5,6,7],3))
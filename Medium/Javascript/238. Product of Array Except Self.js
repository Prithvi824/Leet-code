/**Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix *= nums[i - 1];
    ans[i] = prefix;
  }

  let suffix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix *= nums[i + 1];
    ans[i] = ans[i] * suffix;
  }

  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));

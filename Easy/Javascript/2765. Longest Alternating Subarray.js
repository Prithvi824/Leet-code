/**You are given a 0-indexed integer array nums. A subarray s of length m is called alternating if:
 * m is greater than 1
 * s1 = s0 + 1
 * The 0-indexed subarray s looks like [s0, s1, s0, s1,...,s(m-1) % 2]. In other words, s1 - s0 = 1, s2 - s1 = -1, s3 - s2 = 1, s4 - s3 = -1, and so on up to s[m - 1] - s[m - 2] = (-1)m
 * Return the maximum length of all alternating subarrays present in nums or -1 if no such subarray exists.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */

var alternatingSubarray = function (nums) {
  let ans = -1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let l = 2;
      while (j < nums.length && nums[j] - nums[j - 1] === Math.pow(-1, l)) {
        ans = Math.max(ans, l);
        j++;
        l++;
      }
      break;
    }
  }
  return ans;
};

/**Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let l = nums.length;
  let arr = Array(l + 1).fill(1);

  for (let num of nums) {
    arr[num] = null;
  }

  return arr.findIndex((val) => val != null)
};

console.log(missingNumber([3,0,1]));

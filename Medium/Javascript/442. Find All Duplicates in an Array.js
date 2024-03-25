/**Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums.sort((a, b) => a - b);
    let arr = [];

    for (let i = 1; i < nums.length; i++){
        if(nums[i-1] === nums[i]) arr.push(nums[i])
    }

    return arr
};

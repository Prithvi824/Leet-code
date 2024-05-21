/*Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
**/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  result = [];

  function backtrack(start, path) {
    result.push(path);
    for (let i = start; i < nums.length; i++) {
      backtrack(i + 1, path.concat([nums[i]]));
    }
  }
  backtrack(0, []);
  return result;
};

/**Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
 * A subarray is a contiguous part of the array. */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let map = {0 : 1};
  let ps = 0;
  let res = 0;

  for (let num of nums) {
    ps += num;
    let val = ps - goal;

    if (val in map) {
      res += map[val];
    }

    if (ps in map) {
      map[ps] += 1;
    } else {
      map[ps] = 1;
    }
  }

  return res;
};

console.log(numSubarraysWithSum([1,0,1,0,1],2));

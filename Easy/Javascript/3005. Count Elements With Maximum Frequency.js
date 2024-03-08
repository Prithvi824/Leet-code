/**
 * You are given an array nums consisting of positive integers.
 * Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
 * The frequency of an element is the number of occurrences of that element in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let map = {};

  for (let num of nums) {
    if (num in map) {
      map[num] += 1;
    }
    else {
        map[num] = 1
    }
  }

  let values = Object.values(map);
  let freq = 0;
  let max_freq = 0;

  for (let val of values){
    if (val > max_freq){
        freq = val;
        max_freq = val;
    }
    else if (val === max_freq){
        freq += val
    }
  }

  return freq
};

let arr = { a: 100 };
console.log(arr);

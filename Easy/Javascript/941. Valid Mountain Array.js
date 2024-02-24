/**Given an array of integers arr, return true if and only if it is a valid mountain array.
 * Recall that arr is a mountain array if and only if:
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let start = 0;
  let end = arr.length - 1;

  while (start < arr.length - 1 && arr[start] < arr[start + 1]) {
    start++;
  }
  while (end > 1 && arr[end - 1] > arr[end]) {
    end--;
  }

  return start === end && end != 0 && start != arr.length - 1;
};

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

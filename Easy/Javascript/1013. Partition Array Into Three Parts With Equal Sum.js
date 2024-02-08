/**
 * Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.
 * Formally, we can partition the array if we can find indexes i + 1 < j with
 * (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ...
 * + arr[arr.length - 1])
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canThreePartsEqualSum = function (arr) {
  var actual_sum = arr.reduce((previous, current) => {
    return previous + current;
  });

  if (actual_sum % 3 !== 0) {
    return false;
  }

  var target_sum = Math.floor(actual_sum / 3);
  var curr_sum = 0;
  var parts = 0;

  for (num of arr) {
    curr_sum = curr_sum + num;
    if (curr_sum === target_sum) {
      curr_sum = 0;
      parts += 1;
    }
    if (parts >= 3) {
      return true;
    }
  }

  return parts >= 3;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));

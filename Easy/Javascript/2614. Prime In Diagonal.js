/**You are given a 0-indexed two-dimensional integer array nums.
 * Return the largest prime number that lies on at least one of the diagonals of nums. In case, no prime is present on any of the diagonals, return 0.
 * Note that:
 * An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself
 * An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val
 */

var is_prime = function (num) {
  if (num <= 1) {
    return false;
  } else if (num == 2) {
    return true;
  }

  for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  if (nums.length == 1) {
    let prime_num = 0;

    if (is_prime(nums[0][0])) {
      prime_num = nums[0][0];
    }

    if (is_prime(nums[0].slice(-1))) {
      prime_num = Math.max(prime_num, nums[0].slice(-1));
    }

    return prime_num;
  }

  let i = 0;
  let j = nums.length - 1;
  let prime_num = 0;

  while (j >= 0) {
    if (i === j) {
      var diagonal_1 = is_prime(nums[i][i]) ? nums[i][i] : 0;
    } else {
      var diagonal_1 = is_prime(nums[i][i]) ? nums[i][i] : 0;
      var diagonal_2 = is_prime(nums[j][i]) ? nums[j][i] : 0;
    }

    prime_num = Math.max(prime_num, diagonal_1, diagonal_2);

    i += 1;
    j -= 1;
  }

  return prime_num;
};

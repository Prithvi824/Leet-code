'''
You are given a 0-indexed two-dimensional integer array nums.

Return the largest prime number that lies on at least one of the diagonals of nums. In case, no prime is present on any of the diagonals, return 0.

Note that:

An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself.
An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val.
'''

import math

class Solution:
    def is_prime(self, num):
        if num <= 1:
            return False
        if num == 2:
            return True

        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return False

        return True

    def diagonalPrime(self, nums: list[list[int]]) -> int:
        if len(nums) == 1:
            prime_num = 0
            if self.is_prime(nums[0][0]):
                prime_num = nums[0][0]
            if self.is_prime(nums[0][-1]):
                prime_num = max(prime_num, nums[0][-1])
            return prime_num

        i = 0
        j = len(nums) - 1
        prime_num = 0

        while j >= 0:
            diagonal_1 = nums[i][i] if self.is_prime(nums[i][i]) else 0
            diagonal_2 = nums[j][i] if self.is_prime(nums[j][i]) else 0
            prime_num = max(prime_num, diagonal_1, diagonal_2)

            i += 1
            j -= 1

        return prime_num
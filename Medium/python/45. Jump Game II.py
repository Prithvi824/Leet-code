'''
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
'''

from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        max_reach = nums[0]
        steps = nums[0]
        jumps = 1
        n = len(nums)

        if n == 1:
            return 0

        for i in range(1, n):
            if i == n - 1:
                return jumps

            max_reach = max(max_reach, i + nums[i])

            steps -= 1
            if steps == 0:
                jumps += 1
                steps = max_reach - i

        return jumps
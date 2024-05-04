"""
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.
"""

from typing import List

class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()

        ans = 0

        left = 0
        right = len(people) -1

        while left <= right:
            if left == right:
                ans += 1
            elif people[right] == limit:
                ans += 1
            elif people[right] + people[left] <= limit:
                ans += 1
                left += 1
            else:
                ans += 1

            right -= 1

        return ans

print(Solution().numRescueBoats([3,2,3,2,2],6))
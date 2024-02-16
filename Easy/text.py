class Solution:
    def thirdMax(self, nums: list[int]) -> int:
        nums.sort()
        maximum = nums[-1]
        iteration = 1

        for val in nums[::-1]:
            if val != maximum:
                maximum = val
                iteration += 1
                if iteration == 3:
                    return maximum

        return nums[-1]

print(Solution().thirdMax([1,2]))

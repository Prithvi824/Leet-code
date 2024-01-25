'''
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.
'''

class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        ind = 0
        initial_sum = sum(nums[ind:k])
        max_avg = initial_sum / k

        for i in range(k, len(nums)):
            values = initial_sum - nums[ind] + nums[i]
            initial_sum = values
            avg = values / k

            if max_avg < avg:
                max_avg = avg

            ind += 1

        return max_avg

print(Solution().findMaxAverage([4,2,1,3,3],2)) #6
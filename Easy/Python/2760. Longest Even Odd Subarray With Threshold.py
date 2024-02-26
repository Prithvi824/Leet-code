'''
You are given a 0-indexed integer array nums and an integer threshold.

Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:

nums[l] % 2 == 0
For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
For all indices i in the range [l, r], nums[i] <= threshold
Return an integer denoting the length of the longest such subarray.

Note: A subarray is a contiguous non-empty sequence of elements within an array.
'''

class Solution:
    def longestAlternatingSubarray(self, nums: list[int], threshold: int) -> int:
        flag = False
        arr = []
        length = 0

        for num in nums:
            if flag:
                if arr[-1] % 2 == 0 and num % 2 != 0 and num <= threshold:
                    arr.append(num)
                elif arr[-1] % 2 != 0 and num % 2 == 0 and num <= threshold:
                    arr.append(num)
                else:
                    flag = False
                    length = max(length, len(arr))
                    arr.clear()
            if not flag and num % 2 == 0 and num <= threshold:
                arr.append(num)
                flag = True

        return max(length, len(arr))

print(Solution().longestAlternatingSubarray([2,3,2,3,2,3],))
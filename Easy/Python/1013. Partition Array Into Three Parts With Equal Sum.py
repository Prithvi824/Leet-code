'''Given an array of integers arr, return true if we can partition the array into three non-empty parts 
with equal sums. Formally, we can partition the array if we can find indexes i + 1 < j with 
(arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + 
arr[arr.length - 1])'''


class Solution:
    def canThreePartsEqualSum(self, arr: list[int]) -> bool:
        arr_sum = sum(arr)

        if arr_sum % 3 != 0:
            return False

        target_sum = arr_sum // 3
        curr = 0
        parts = 0

        for num in arr:
            curr += num
            if curr == target_sum:
                curr = 0
                parts += 1
            if parts >= 3:
                return True

        return parts >= 3
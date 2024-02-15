'''
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
'''

class Solution:
    def checkIfExist(self, arr: list[int]) -> bool:
        for i in range(len(arr)):
            check_arr = arr[::]
            check_arr.pop(i)
            if (2 * arr[i]) in check_arr:
                return True

        return False

print(Solution().checkIfExist([1,1,1,1,1,0]))
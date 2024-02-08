'''Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.

A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times 
consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.'''

class Solution:
    def check(self,arr, size, length):
        if size * length > len(arr):
            return False

        const = arr[0:size]

        for i in range(size,len(arr),size):
            if arr[i: i+size] != const:
                return False

        return True


    def containsPattern(self, arr: list[int], m: int, k: int) -> bool:
        sub_size = m * k
        initial_arr = arr[0:sub_size]

        if self.check(initial_arr, m, k):
            return True

        for i in range(sub_size, len(arr)):
            if self.check(initial_arr, m, k):
                return True

            initial_arr.pop(0)
            initial_arr.append(arr[i])

        return False

print(Solution().containsPattern([1,2,1,2],2,2))

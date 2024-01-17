''' Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or 
false otherwise. '''

class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        mapping = {}
        visited = []

        for i in arr:
            if i in visited:
                continue

            key = str(arr.count(i))
            visited.append(i)

            if key not in mapping:
                mapping[key] = i
            elif not mapping[key] == i:
                return False

        return True


print(Solution().uniqueOccurrences([1,2,2,1,1,3]))
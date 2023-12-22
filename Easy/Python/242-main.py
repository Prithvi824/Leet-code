'''
The first intution i had was to check if all the elements in the word is present in the anagram 
but at second thought that would be slow so instead if i sorted both the words i should get the same 
array if the situation is true
'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)

print(Solution().isAnagram('hello','olleh'))
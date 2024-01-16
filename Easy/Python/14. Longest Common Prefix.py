'''Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
'''

class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        length = len(strs)

        if length == 1:
            return strs[0]

        prefix = strs[0]
        ind = 1

        while ind < length:
            if len(prefix) == 0:
                return ''

            if not strs[ind].startswith(prefix):
                prefix = prefix[:-1]
            else:
                ind += 1

        return prefix

print(Solution().longestCommonPrefix(["flower","flow","flight"]))
"""
You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children.
"""

import collections

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def numToal(self, number):
        return chr(97 + number)

    def smallestFromLeaf(self, root: TreeNode) -> str:
        queue = collections.deque()
        queue.append((root, self.numToal(root.val)))
        results = []
        
        while queue:
            cur, path = queue.popleft()
            if not cur.left and not cur.right:
                results.append(path[::-1])
            if cur.left:
                queue.append((cur.left, path + self.numToal(cur.left.val)))
            if cur.right:
                queue.append((cur.right, path + self.numToal(cur.right.val)))
        results.sort()
        return results[0]

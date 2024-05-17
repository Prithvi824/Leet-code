"""
Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).
"""

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:
        if not root:
            return None
        if not root.left and not root.right:
            return None if root.val == target else root

        left = self.removeLeafNodes(root.left, target=target)
        right = self.removeLeafNodes(root.right, target=target)

        if left == None and right == None:
            root.left = None
            root.right = None
            return None if root.val == target else root
        if left == None:
            root.left = None
        elif right == None:
            root.right = None

        return root

x = TreeNode(8)
print(Solution().removeLeafNodes(x, 8))
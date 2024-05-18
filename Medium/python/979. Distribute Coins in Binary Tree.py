"""
You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree.

In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.

Return the minimum number of moves required to make every node have exactly one coin.
"""

from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        # structure => [moves taken, given coins, asked coins]
        def dfs(root):
            if not root:
                return [0,0,0]
            if not root.left and not root.right:
                if root.val == 0:
                    values = [1, 0, -1]
                else:
                    values = [root.val - 1, root.val - 1, 0]
                return values

            left = dfs(root.left)
            right = dfs(root.right)

            moves = left[0] + right[0]
            root.val = root.val + left[1] + right[1] + left[2] + right[2]

            if root.val == 1:
                return [moves, 0, 0]
            elif root.val > 1:
                return [moves + root.val - 1, root.val - 1, 0]
            else:
                return [moves + abs(root.val - 1), 0, root.val - 1]

        return dfs(root)[0]

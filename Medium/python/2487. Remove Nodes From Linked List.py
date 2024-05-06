"""
You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.
"""

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        stack = []
        current = head

        while current:
            if stack and stack[-1].val < current.val:
                while stack and stack[-1].val < current.val:
                    stack.pop()
                if stack:
                    stack[-1].next = current

            stack.append(current)
            current = current.next

        return stack[0]

"""
You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

Return the head of the linked list after doubling it.
"""

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head

        while current:
            current.val *= 2
            current = current.next

        current = head

        if current.val > 9:
            head = ListNode(1, current)
            current.val -= 10

        prev = current
        current = current.next

        while current:
            if current.val > 9:
                prev.val += 1
                current.val -= 10

            prev = current
            current = current.next

        return head
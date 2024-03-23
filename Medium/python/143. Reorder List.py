'''
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
'''

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reorderList(self, head: ListNode) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        arr = []

        while head:
            arr.append(head)
            head = head.next

        left = 0
        right = len(arr) - 1

        while left < right - 1:
            tmp = arr[left].next
            arr[left].next = arr[right]
            arr[right].next = tmp
            left += 1
            right -= 1

        arr[right].next = None
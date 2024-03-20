'''
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result
'''

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        dummy = ListNode(next=list1)
        start = end = None
        ind = 0

        while list1:
            if ind + 1 == a:
                start = list1
            elif ind == b:
                end = list1.next
                break

            list1 = list1.next
            ind += 1

        start.next = list2

        while list2:
            if not list2.next:
                list2.next = end
                break

            list2 = list2.next

        return dummy.next

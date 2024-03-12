'''
Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of ListNode objects.)
'''


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeZeroSumSublists(self, head: ListNode) -> ListNode:
        dummy = ListNode(0,head)

        mapping = {
            0: dummy
        }

        prefix_sum = 0

        while head:
            prefix_sum = prefix_sum + head.val

            if prefix_sum not in mapping:
                mapping[prefix_sum] = head
            else:
                temp = mapping[prefix_sum].next

                while temp != head:
                    mapping.popitem()
                    temp = temp.next

                mapping[prefix_sum].next = head.next

        return dummy.next
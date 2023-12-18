# '''
# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order, and each of their nodes contains a single digit.
# Add the two numbers and return the sum as a linked list.
# You may assume the two numbers do not contain any leading zero, except the number 0 itself.
# '''

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next




class Solution:
    def parse(self, nums):
        head = ListNode(nums[0])
        curr = head

        for val in nums[1:]:
            curr.next = ListNode(val)
            curr = curr.next

        return head

    def addTwoNumbers(self, l1: [ListNode], l2: [ListNode]) -> [ListNode]:
        num1 = ''
        while l1:
            num1 += str(l1.val)
            l1 = l1.next

        num2 = ''
        while l2:
            num2 += str(l2.val)
            l2 = l2.next

        val = int(num1[::-1]) + int(num2[::-1])
        val = str(val)[::-1]

        head = self.parse(list(val))
        return head

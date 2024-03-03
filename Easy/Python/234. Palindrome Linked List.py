'''
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
'''

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        palindrome = []
        curr = head

        while curr:
            palindrome.append(curr.val)
            curr = curr.next

        return palindrome == palindrome[::-1]
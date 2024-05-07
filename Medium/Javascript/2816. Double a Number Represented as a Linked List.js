/**You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

Return the head of the linked list after doubling it. */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  let curr = head;

  while (curr) {
    curr.val *= 2;
    curr = curr.next
  }

  curr = head;
  if (curr.val > 9) {
    head = new ListNode(1, curr);
    curr.val -= 10;
  }

  prev = curr;
  curr = curr.next;

  while (curr) {
    if (curr.val > 9) {
      prev.val += 1;
      curr.val -= 10;
    }
    prev = curr;
    curr = curr.next;
  }

  return head;
};

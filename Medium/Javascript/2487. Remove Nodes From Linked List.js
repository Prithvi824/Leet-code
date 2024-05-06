/**You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list. */

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
var removeNodes = function (head) {
  let stack = [];
  let curr = head;

  while (curr) {
    if (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
      while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
        stack.pop();
      }

      if (stack.length > 0) {
        stack[stack.length - 1].next = curr;
      }
    }

    stack.push(curr);
    curr = curr.next;
  }

  return stack[0];
};

let head = new ListNode(5, new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8)))))

console.log(removeNodes(head))
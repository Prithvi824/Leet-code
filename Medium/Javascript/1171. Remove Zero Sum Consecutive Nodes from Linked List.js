/**Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of ListNode objects.) */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let dummy = new ListNode(0, head);
  let prefix = 0;

  let mapping = {
    0: dummy,
  };

  while (head) {
    prefix += head.val;

    if (!(prefix in mapping)) {
      mapping[prefix] = head;
    } else {
      let temp = mapping[prefix].next;
      let temp_sum = prefix;

      while (temp != head) {
        temp_sum += temp.val;
        delete mapping[temp_sum];
        temp = temp.next;
      }

      mapping[prefix].next = head.next;
    }

    head = head.next;
  }

  return dummy.next;
};

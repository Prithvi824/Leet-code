/**You are given two linked lists: list1 and list2 of sizes n and m respectively.
 * Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
 * The blue edges and nodes in the following figure indicate the result */

/**
 * Definition for singly-linked list. */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let head = list1;
  let start = null;
  let end = null;
  let list2End = null;
  let list2Start = list2;
  let ind = 0;

  while (true) {
    if (list1 && !end) {
      if (ind + 1 === a) {
        start = list1;
      } else if (ind === b) {
        end = list1.next;
      }
      list1 = list1.next;
      ind++;
    }
    if (list2) {
      if (!list2.next) {
        list2End = list2;
      }
      list2 = list2.next;
    }
    if (end && list2End) {
      start.next = list2Start;
      list2End.next = end;
      return head;
    }
  }
};


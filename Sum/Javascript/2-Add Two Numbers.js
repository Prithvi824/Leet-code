/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}




/**
* @param {Array<number>} nums
*/
var parse = function(nums) {
    head = new ListNode(nums[0])
    nums = nums.filter(num => num !== nums[0])
    curr = head

    for(let val in nums) {
        curr.next = new ListNode(nums[val])
        curr = curr.next
    }
    return head
}




let check = function (head) {
    while(head) {
        console.log(head.val)
        console.log('||')
        head = head.next
    }
    console.log()
    return 'completed'
}




var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let count = 0
    while (l1 || l2 || carry !== 0) {
        if (l1) {
            var l1_val = l1.val;
            l1 = l1.next;
        }
        else {
            l1_val = 0;
        }

        if (l2) {
            var l2_val = l2.val;
            l2 = l2.next;
        }
        else {
            l2_val = 0;
        }

        let summation;

        summation = l1_val + l2_val + carry;
        carry = 0;

        if (summation >= 10) {
            summation -= 10;
            carry++;
        }

        if (count === 0) {
            var head = new ListNode(summation);
            var curr = head;
            count++
        }
        else {
            curr.next = new ListNode(summation);
            curr = curr.next;
        }
    }
    return head
};

let h1 = parse([3,2,1])
check(h1)

let h2 = parse([7,9])
check(h2)

var s2 = addTwoNumbers(h1,h2)
check(s2)
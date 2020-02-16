/* 
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const perf = require('execution-time')();

function ListNode(val) {
     this.val = val;
    this.next = null;
}

let l1 = new ListNode(1);
l1.next = new ListNode(8);

let l2 = new ListNode(0);

perf.start();

const addTwoNumbers = (l1, l2) => {
    let curr1 = l1;
    let curr2 = l2;
    let curr3 = new ListNode(null);
    let res = curr3;
    let go = true;

    while(go) {
        if(curr1 === null && curr2 === null) {
            go = false;
        }
        if(curr1.next !== null && curr2.next === null) {
            curr2.next = new ListNode(0);
        }
        if(curr2.next !== null && curr1.next === null) {
            curr1.next = new ListNode(0);
        }

        const result = curr1.val + curr2.val;
        
        if(result < 10) {
            if(curr1.next !== null && curr2.next !== null) {
                curr3.val = result;
                console.log(curr3.val);
                curr1 = curr1.next;
                curr2 = curr2.next;
                curr3.next = new ListNode(null);
                curr3 = curr3.next;
                continue;
            }
            else {
                curr3.val = result;
                break;
            }
        }
        else if(result >= 10) {
            if(curr1.next !== null && curr2.next !== null) {
                curr3.val = result - 10;
                curr1.next.val = curr1.next.val += 1;
                curr1 = curr1.next;
                curr2 = curr2.next;
                curr3.next = new ListNode(null);
                curr3 = curr3.next;
            }
            else {
                curr3.val = result - 10;
                curr3.next = new ListNode(null);
                curr3.next.val = 1;
                break;
            }
        }
    }
    
    return res;
};

const result = addTwoNumbers(l1, l2);
console.log(result.val);
console.log(result.next.val);
const results = perf.stop();
console.log(results.time);
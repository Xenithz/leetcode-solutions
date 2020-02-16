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
    const head = new ListNode();
    let tail = head;
    let counter = 0;
  
    while (l1 || l2 || counter) {
      const v1 = l1 ? l1.val : 0;
      const v2 = l2 ? l2.val : 0;
      const sum = v1+v2+counter;
  
      tail.next = new ListNode(sum%10);
      tail = tail.next;
      counter = sum >= 10 ? 1 : 0;
      l1 = l1&&l1.next;
      l2 = l2&&l2.next;
    }
  
    return head.next;
}

const result = addTwoNumbers(l1, l2);
console.log(result.val);
console.log(result.next.val);
const results = perf.stop();
console.log(results.time)
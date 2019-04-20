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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode(0);
    let cur = head;

    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        let node = l1 ? l1 : l2 ? l2 : new ListNode(carry);

        node.val = sum % 10;

        cur.next = node;
        cur = cur.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return head.next;
};

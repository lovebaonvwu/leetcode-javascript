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
var mergeTwoLists = function(l1, l2) {
    let c1 = l1;
    let c2 = l2;
    let head = new ListNode(-1);
    let cur = head;

    while (c1 && c2) {
        if (c1.val < c2.val) {
            cur.next = c1;
            c1 = c1.next;
        } else {
            cur.next = c2;
            c2 = c2.next;
        }

        cur = cur.next;
    }

    if (c1) {
        cur.next = c1;
    }

    if (c2) {
        cur.next = c2;
    }

    return head.next;
};

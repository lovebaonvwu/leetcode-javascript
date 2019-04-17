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
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);

        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);

        return l2;
    }
};

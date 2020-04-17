/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val,next) {
    this.val = val;
    this.next = null;
}

var swapPairs = function (head) {
    let node = new ListNode(0, head);
    let cur = head;
    head = node;
    while (cur !== null && cur.next !== null) {
        let pre = cur, next = cur.next;
        node.next = next;
        pre.next = next.next;
        next.next = pre;
        node = node.next.next;
        cur = node.next;
    }
    return head.next;
};
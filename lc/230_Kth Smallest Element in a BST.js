/*
* Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?
How would you optimize the kthSmallest routine?

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var kthSmallest = function(root, k) {
    let arr = [];
    let curr = root;
    let count = 0;
    while (curr != null || arr.length > 0)
    {

        /* Reach the left most Node of the
        curr Node */
        while (curr !=  null)
        {
            /* place pointer to a tree node on
               the stack before traversing
              the node's left subtree */
            arr.push(curr);
            curr = curr.left;
        }

        /* Current must be NULL at this point */
        curr = arr.pop();
        count ++;

        if (count === k){
            return curr.val;
        }

       // console.log(curr.val + " ");

        /* we have visited the node and its
           left subtree.  Now, it's right
           subtree's turn */
        curr = curr.right;
    }
    return -1;

};

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

console.log(kthSmallest(root,4));

/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
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
 * @return {number}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var countNodes = function(root) {
  if (root !== null){
    return 1 + countNodes(root.left) + countNodes(root.right);
  } else {
    return 0
  }
};


 let root = new TreeNode(1);
 root.left = new TreeNode(2);
 root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(countNodes(root));

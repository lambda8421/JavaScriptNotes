/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const arr = [];
  right(root,arr,0);
  return arr;
};

function right(root,nums,depth){
  if (root === null) return;
  if (nums.length === depth){
    nums.push(root.val);
  }
  right(root.right,nums,depth+1);
  right(root.left,nums,depth+1);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(rightSideView(root));

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
